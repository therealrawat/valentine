import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuizPageProps {
  questionIndex: number
  onNext: () => void
}

const QUESTIONS = [
  {
    question: "Where was our first date?",
    options: [
      "Dehradun",
      "Gurgaon",
      "New Delhi",
      "Mussorie"
    ],
    correctAnswer: 1
  },
  {
    question: "What's our favorite memory together?",
    options: [
      "First meeting",
      "First trip",
      "First kiss",
      "First gift"
    ],
    correctAnswer: 2
  },
  {
    question: "What makes me smile the most?",
    options: [
      "Surprises",
      "Being together",
      "Gifts",
      "Messages"
    ],
    correctAnswer: 1
  }
]

export default function QuizPage({ questionIndex, onNext }: QuizPageProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [fireEmojis, setFireEmojis] = useState<Array<{ id: number; x: number; y: number }>>([])

  const currentQuestion = QUESTIONS[questionIndex]
  const CORRECT_ANSWER_INDEX = currentQuestion.correctAnswer

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null) return // Prevent multiple clicks

    setSelectedAnswer(index)

    if (index === CORRECT_ANSWER_INDEX) {
      setShowFeedback(true)
      setTimeout(() => {
        setShowFeedback(false)
        setSelectedAnswer(null)
        onNext()
      }, 1000)
    } else {
      // Create fire emoji at random position
      const newFire = {
        id: Date.now(),
        x: Math.random() * 80 + 10, // 10-90% of screen width
        y: Math.random() * 80 + 10, // 10-90% of screen height
      }
      setFireEmojis([...fireEmojis, newFire])

      setTimeout(() => {
        setSelectedAnswer(null)
        setFireEmojis((prev) => prev.filter((f) => f.id !== newFire.id))
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-red-50 px-4 relative overflow-hidden">
      {/* Floating fire emojis */}
      <AnimatePresence>
        {fireEmojis.map((fire) => (
          <motion.div
            key={fire.id}
            initial={{ opacity: 0, scale: 0, x: `${fire.x}%`, y: `${fire.y}%` }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.5, 1, 0],
              x: `${fire.x}%`,
              y: `${fire.y - 20}%`,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute text-4xl pointer-events-none"
            style={{ left: 0, top: 0 }}
          >
            🔥
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-pink-200">
          <div className="mb-6">
            <div className="text-center text-sm text-pink-600 font-semibold mb-2">
              Question {questionIndex + 1} of {QUESTIONS.length}
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
                whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                className={`w-full px-6 py-4 rounded-lg text-left font-medium transition-all ${selectedAnswer === index
                    ? index === CORRECT_ANSWER_INDEX
                      ? 'bg-green-100 border-2 border-green-400 text-green-800'
                      : 'bg-red-100 border-2 border-red-400 text-red-800'
                    : 'bg-pink-50 border-2 border-pink-200 hover:border-pink-300 text-gray-700'
                  } ${selectedAnswer !== null && index !== selectedAnswer ? 'opacity-50' : ''}`}
              >
                {option}
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-center"
              >
                <div className="text-5xl mb-2">🌸</div>
                <p className="text-xl font-semibold text-green-600">Good</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
