import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const links = [
  { href: '/', name: 'Homepage' },
  { href: '/journal', name: 'Journal' },
]

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen relative ">
      <aside className="absolute p-5 space-y-6 top-0 left-0 h-full border-r border-black/10 w-[200px]">
        <h1 className="text-2xl">Mood</h1>
        <ul>
          {links.map((link) => (
            <li key={link.href} className="underline">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
