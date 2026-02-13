import { useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

interface ProposalPageProps {
  onAccept: () => void
}

export default function ProposalPage({ onAccept }: ProposalPageProps) {
  const [yesScale, setYesScale] = useState(1)
  const [noScale, setNoScale] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleNoClick = () => {
    setNoScale((prev) => Math.max(prev * 0.5, 0.1))
    setYesScale((prev) => prev * 2)
  }

  const handleYesClick = () => {
    setShowConfetti(true)
    setTimeout(() => {
      onAccept()
    }, 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-red-50 px-4 relative overflow-hidden">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl text-center"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-pink-200">
          {/* Romantic GIF/SVG placeholder */}
          <div className="mb-8">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="text-8xl mb-4"
            >
              💕
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
            Will you be my valentine?
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              onClick={handleYesClick}
              animate={{ scale: yesScale }}
              whileHover={{ scale: yesScale * 1.1 }}
              whileTap={{ scale: yesScale * 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transition-shadow min-w-[150px]"
            >
              Yes
            </motion.button>

            <motion.button
              onClick={handleNoClick}
              animate={{ scale: noScale }}
              whileHover={{ scale: noScale * 1.1 }}
              whileTap={{ scale: noScale * 0.95 }}
              className="px-12 py-4 bg-gray-300 text-gray-700 font-bold text-xl rounded-full shadow-lg hover:shadow-xl transition-shadow min-w-[150px]"
            >
              No
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
