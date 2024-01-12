'use client'
import { useCompletion } from "ai/react"
export default function Home() {

  const{completion, input, stop, isLoading, handleInputChange, handleSubmit} = useCompletion({api: '/api/completion'})
  return (
    <div>
      
    </div>
  )
}
