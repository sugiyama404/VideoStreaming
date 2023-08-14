'use client'
//@ts-ignore
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const search = searchParams.get('name')

  return <>Search: {search}</>
}
