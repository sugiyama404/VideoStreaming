'use client'
//@ts-ignore
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const search = searchParams.get('name')

  return (
    <div>
      <h1>動画詳細</h1>
      <div>Search: {search}</div>
    </div>
  )
}
