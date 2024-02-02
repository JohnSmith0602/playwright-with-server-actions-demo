import Link from 'next/link'

export default function AnotherPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Another page</h1>
      <Link href="/">Go back to home</Link>
    </main>
  )
}
