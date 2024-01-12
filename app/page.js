'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useCompletion } from "ai/react"
export default function Home() {

  const{completion, input, stop, isLoading, handleInputChange, handleSubmit} = useCompletion({api: '/api/completion'})
  return (
    <div className="bg-gray-800 p-8 shadow-lg max-w-full mx-auto h-screen">
    <h1 className="text-4xl font-bold text-white mb-4">
      Chat with <span className='text-blue-500'>AI</span>
      <FontAwesomeIcon icon={faPen} className="ml-2" />
    </h1>

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Ask anything"
        className="w-3/4 px-4 py-2 rounded-md border-2 border-sky-500 focus:outline-none focus:border-blue-500"
      />
      <br />
      <button
        disabled={isLoading}
        type="submit"
        className={`w-1/4 px-4 py-2 rounded-md ${
          isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        } text-white focus:outline-none`}
      >
        {isLoading ? 'Thinking...' : 'Submit'}
      </button>
      <button
        type="button"
        onClick={stop}
        className="w-1/4 px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white focus:outline-none ml-7"
      >
        Stop
      </button>
    </form>
    <div className='border-2 border-sky-500 w-9/10  mt-6 pt-2 pl-2 rounded-lg h-3/4'>
    <output className="text-gray-300 mt-4 font-semibold">
      <span className='text-sky-400'>Ai Response :</span> {completion}
    </output>
    </div>

  </div>
  )
}
