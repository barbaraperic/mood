import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="mx-auto space-y-5 w-full max-w-[600px]">
        <h1 className="text-4xl">The best journal App, period.</h1>
        <p>This is the best app for tracking your mood thoughout </p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-700 p-4 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
