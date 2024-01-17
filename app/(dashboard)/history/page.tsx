import HistoryChart from '@/components/HistoryChart'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getSentimentScore = async () => {
  const user = await getUserByClerkId()
  const analysis = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  const sum = analysis.reduce((all, item) => all + item.sentimentScore, 0)
  const average = Math.round(sum / analysis.length)

  return { analysis, average }
}

const History = async () => {
  const data = await getSentimentScore()
  const { analysis, average } = data

  return (
    <div className="h-full w-full">
      <p>{`Average sentiment ${average}`}</p>
      <div className="h-full w-full">
        <HistoryChart data={analysis} />
      </div>
    </div>
  )
}

export default History
