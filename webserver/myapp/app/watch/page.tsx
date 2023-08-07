'use client'

//@ts-ignore
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()

  const search = searchParams.get('v')

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {search}</>
}
