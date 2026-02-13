import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AuthPage from './components/AuthPage'
import QuizPage from './components/QuizPage'
import ProposalPage from './components/ProposalPage'
import FinalPage from './components/FinalPage'

type AppStep = 'auth' | 'quiz' | 'proposal' | 'final'

function App() {
  const [step, setStep] = useState<AppStep>('auth')
  const [quizQuestion, setQuizQuestion] = useState(0)

  const handleAuthSuccess = () => {
    setStep('quiz')
    setQuizQuestion(0)
  }

  const handleQuizComplete = () => {
    setStep('proposal')
  }

  const handleQuizNext = () => {
    if (quizQuestion < 2) {
      setQuizQuestion(quizQuestion + 1)
    } else {
      handleQuizComplete()
    }
  }

  const handleProposalAccept = () => {
    setStep('final')
  }

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {step === 'auth' && (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AuthPage onSuccess={handleAuthSuccess} />
          </motion.div>
        )}
        {step === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <QuizPage
              questionIndex={quizQuestion}
              onNext={handleQuizNext}
            />
          </motion.div>
        )}
        {step === 'proposal' && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <ProposalPage onAccept={handleProposalAccept} />
          </motion.div>
        )}
        {step === 'final' && (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FinalPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
