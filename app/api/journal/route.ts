import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async () => {
  const user = await getUserByClerkId()
  const entry = await prisma.journalEntry.create({
    data: {
      content: 'Write about your day',
      user: {
        connect: {
          id: user.id,
        },
      },
      analysis: {
        create: {
          mood: 'Neutral',
          subject: 'None',
          negative: false,
          summary: 'None',
          color: '#0101fe',
          userId: user.id,
        },
      },
    },
  })

  return NextResponse.json({ data: entry })
}
