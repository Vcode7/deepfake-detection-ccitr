'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  username: string
  email: string
  created_at: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (username: string, password: string) => Promise<boolean>
  register: (username: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing token on app load
    const savedToken = localStorage.getItem('auth_token')
    if (savedToken) {
      setToken(savedToken)
      fetchUserInfo(savedToken)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchUserInfo = async (authToken: string) => {
    try {
      const response = await fetch('http://localhost:8000/auth/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      
      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
      } else {
        // Token is invalid, clear it
        localStorage.removeItem('auth_token')
        setToken(null)
      }
    } catch (error) {
      console.error('Error fetching user info:', error)
      localStorage.removeItem('auth_token')
      setToken(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        const data = await response.json()
        const authToken = data.access_token
        setToken(authToken)
        localStorage.setItem('auth_token', authToken)
        await fetchUserInfo(authToken)
        return true
      } else {
        const errorData = await response.json()
        console.error('Login failed:', errorData.detail)
        return false
      }
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        const authToken = data.access_token
        setToken(authToken)
        localStorage.setItem('auth_token', authToken)
        await fetchUserInfo(authToken)
        return true
      } else {
        const errorData = await response.json()
        console.error('Registration failed:', errorData.detail)
        return false
      }
    } catch (error) {
      console.error('Registration error:', error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('auth_token')
  }

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
