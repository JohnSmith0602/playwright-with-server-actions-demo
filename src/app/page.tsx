'use client'

import Link from 'next/link'
import { startTransition } from 'react'
import { login } from '../actions'

export default function Home() {
  const onClick = async () => {
    console.log('on click')
    // @ts-ignore
    startTransition(async () => {
      await login()
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Server actions with playwright Demo</h1>

      <button onClick={onClick}>Click me to redirect in server actions</button>

      <div>
        <Link href="/redirect">Normal redirect</Link>
      </div>
    </main>
  )
}
