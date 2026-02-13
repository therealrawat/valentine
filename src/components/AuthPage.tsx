import { useState } from 'react'
import { motion } from 'framer-motion'

interface AuthPageProps {
  onSuccess: () => void
}

const ALLOWED_NAMES = [
  import.meta.env.VITE_ALLOWED_NAME_1?.toLowerCase() || 'nikita',
  import.meta.env.VITE_ALLOWED_NAME_2?.toLowerCase() || 'chinu',
]

export default function AuthPage({ onSuccess }: AuthPageProps) {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const normalizedName = name.trim().toLowerCase()
    
    if (ALLOWED_NAMES.includes(normalizedName)) {
      setError(false)
      setTimeout(() => {
        onSuccess()
      }, 300)
    } else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-red-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-pink-200">
          <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            💕 Valentine's Quest 💕
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                Enter your name (Who is this?)
              </label>
              <motion.input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                animate={error ? {
                  x: [0, -10, 10, -10, 10, 0],
                } : {}}
                transition={{ duration: 0.5 }}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  error ? 'border-red-500 bg-red-50' : 'border-pink-300 focus:border-rose-400'
                } focus:outline-none focus:ring-2 focus:ring-rose-300 text-lg`}
                placeholder="Type your name here..."
                autoFocus
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-red-600 font-semibold">Access Denied</p>
              </motion.div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Enter
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
