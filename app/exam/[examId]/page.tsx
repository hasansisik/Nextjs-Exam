'use client'

import { use, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import exams from '@/exams.json'
import { useToast } from '@/hooks/use-toast'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function ExamPage({ params }: { params: Promise<{ examId: string }> }) {
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const { toast } = useToast()
  
  const resolvedParams = use(params)
  const exam = exams.find(exam => exam.id === resolvedParams.examId)
  
  if (!exam) {
    return <div>Sınav bulunamadı</div>
  }

  const handleSubmit = () => {
    let correctCount = 0
    exam.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++
      }
    })

    toast({
      title: "Sınav Sonucu",
      description: `${exam.questions.length} sorudan ${correctCount} doğru cevapladınız.`
    })
  }

  const handleNext = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const currentQuestion = exam.questions[currentQuestionIndex]

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{exam.title}</h1>
        <Button 
          variant="destructive" 
          onClick={handleSubmit}
        >
          Sınavı Bitir
        </Button>
      </div>
      
      <p className="mb-6 text-gray-600">{exam.desc}</p>

      <div className="mb-4">
        <span className="text-sm text-gray-500">
          Soru {currentQuestionIndex + 1} / {exam.questions.length}
        </span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={userAnswers[currentQuestionIndex]}
            onValueChange={(value) => {
              setUserAnswers(prev => ({
                ...prev,
                [currentQuestionIndex]: value
              }))
            }}
          >
            {currentQuestion.options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.charAt(0)}
                  id={`${currentQuestionIndex}-${optionIndex}`}
                />
                <Label htmlFor={`${currentQuestionIndex}-${optionIndex}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-between">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Önceki Soru
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentQuestionIndex === exam.questions.length - 1}
        >
          Sonraki Soru
        </Button>
      </div>
      <ScrollArea className="my-5">
        <div className="grid grid-cols-10 gap-2">
          {exam.questions.map((_, index) => (
            <Button
              key={index}
              variant={currentQuestionIndex === index ? "default" : "outline"}
              onClick={() => setCurrentQuestionIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
