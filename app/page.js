'use client'
import { useCompletion } from "ai/react"
export default function Home() {

  const{completion, input, stop, isLoading, handleInputChange, handleSubmit} = useCompletion({api: '/api/completion'})
  return (
    <div className="bg-gray-800 p-8 shadow-lg max-w-full mx-auto h-screen">
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Ask anything"
        className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
      />
      <button
        disabled={isLoading}
        type="submit"
        className={`w-full px-4 py-2 rounded-md ${
          isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        } text-white focus:outline-none`}
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
      <button
        type="button"
        onClick={stop}
        className="w-1/4 px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white focus:outline-none"
      >
        Stop
      </button>
    </form>
    <output className="text-gray-300 mt-4">
      Ai Response: {completion}
    </output>
  </div>
  )
}
