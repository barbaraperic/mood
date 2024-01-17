import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getSentimentScore = async () => {
  const user = await getUserByClerkId()
  const analysis = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    select: {
      sentimentScore: true,
    },
  })

  const sum = analysis.reduce((all, item) => all + item.sentimentScore, 0)
  const average = Math.round(sum / analysis.length)

  return { analysis, average }
}

const History = async () => {
  const data = await getSentimentScore()
  const { analysis, average } = data

  console.log(analysis)
  return (
    <div>
      <p>Average score {average}</p>
    </div>
  )
}

export default History
