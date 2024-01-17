'use client'
import { askQuestion } from '@/utils/api'
import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await askQuestion(value)
    setValue('')
    setLoading(false)
    setResponse(res)
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          disabled={loading}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-black/10 rounded-lg text-lg px-4 py-2"
        />
        <button
          disabled={loading}
          className="px-4 py-2 rounded-lg border-2 bg-blue-600 text-white"
        >
          Ask
        </button>
      </form>
      {loading && <p>loading</p>}
      {response && <p>{response}</p>}
    </div>
  )
}

export default Question
