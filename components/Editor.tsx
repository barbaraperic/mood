'use client'
import { updateEntry } from '@/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  // const [analysis, setAnalysis] = useState(analysisData)

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const updated = await updateEntry(entry.id, _value)
      console.log('updated', updated)
      // setAnalysis((currentState) => {
      //   const updated = currentState.map((item) => {
      //     if (item.name.toLowerCase() in updatedAnalysisValues) {
      //       return {
      //         ...item,
      //         value: updatedAnalysisValues[item.name.toLowerCase()],
      //       }
      //     }
      //   })
      //   return updated
      // })
      setIsLoading(false)
    },
  })

  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-2">
        {isLoading && <p>...loading</p>}
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-full p-8 text-xl"
        ></textarea>
      </div>
      <div className="border-l border-black/10">
        <div className="bg-blue-300 px-10 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <ul>
          {/* {analysis.map((data) => (
            <li
              key={data?.name}
              className="px-2 py-4 flex items-center justify-between border-b border-t border-black/10"
            >
              <span className="text-lg font-semibold">{data?.name}</span>
              <span>{data?.value}</span>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  )
}

export default Editor
