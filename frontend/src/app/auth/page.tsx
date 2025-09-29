'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../components/AuthContext'
import { LoginForm } from '../../components/LoginForm'
import { RegisterForm } from '../../components/RegisterForm'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Zap } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user && !loading) {
      router.push('/scan')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (user) {
    return null // Will redirect to /scan
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="mb-8">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Shield className="h-12 w-12 text-red-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Deepfake Detection</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Advanced AI-powered deepfake detection platform. Protect yourself from manipulated media with cutting-edge technology.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600">Get results in seconds</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">99% Accuracy</h3>
                <p className="text-gray-600">State-of-the-art detection</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Secure & Private</h3>
                <p className="text-gray-600">Your data is protected</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Auth Forms */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <AnimatePresence mode="wait">
            {isLogin ? (
              <LoginForm key="login" onToggleMode={() => setIsLogin(false)} />
            ) : (
              <RegisterForm key="register" onToggleMode={() => setIsLogin(true)} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
