import Editor from '@/components/Editor'
import { analyse } from '@/utils/ai'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntry = async (id: string) => {
  const user = await getUserByClerkId()

  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId: user.id,
      id,
    },
  })

  await analyse(
    'Today was eh, ok day I guess. I find a new coffee shop that was cool but then I got a flat tire. :)'
  )

  return entry
}

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)

  const analysisData = [
    { name: 'Summary', value: '' },
    { name: 'Subject', value: '' },
    { name: 'Mood', value: '' },
    { name: 'Negative', value: false },
  ]
  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>
      <div className="border-l border-black/10">
        <div className="bg-blue-300 px-10 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <ul>
          {analysisData.map((item) => (
            <li
              key={item.name}
              className="px-2 py-4 flex items-center justify-between border-b border-t border-black/10"
            >
              <span className="text-lg font-semibold">{item.name}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EntryPage
