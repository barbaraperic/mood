'use client'
import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')

  function handleSubmit() {
    // do something
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-black/10 rounded-lg text-lg px-4 py-2"
      />
      <button className="px-4 py-2 rounded-lg border-2 bg-blue-600 text-white">
        Ask
      </button>
    </form>
  )
}

export default Question
