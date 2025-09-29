'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Eye, Brain, ArrowRight } from 'lucide-react'
import NavBar from '../components/NavBar'
import { useAuth } from '../components/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user && !loading) {
      router.push('/scan')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
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
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />

      <div className="relative z-10 pt-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Detect
              <span className="text-red-600"> Deepfakes</span>
              <br />
              with AI Power
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Upload images or videos and get instant analysis using state-of-the-art artificial intelligence. 
              Protect yourself from manipulated media with cutting-edge detection technology.
            </p>
            
            {/* CTA */}
            <div className="mb-10">
              <Link href="/auth" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-900 transition-all shadow-lg">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200"
              >
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-800 text-sm">Lightning Fast</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200"
              >
                <Eye className="h-4 w-4 text-blue-400" />
                <span className="text-gray-800 text-sm">99% Accuracy</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200"
              >
                <Brain className="h-4 w-4 text-red-400" />
                <span className="text-gray-800 text-sm">AI Powered</span>
              </motion.div>
            </div>
          </motion.div>
          {/* Quick steps */}
          <div id="how" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">1. Create Account</p>
              <p className="text-gray-600 text-sm">Sign up to get started with deepfake detection.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">2. Upload File</p>
              <p className="text-gray-600 text-sm">Upload an image or video for analysis.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">3. Get Results</p>
              <p className="text-gray-600 text-sm">View confidence scores and detailed analysis.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}