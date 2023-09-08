'use client'

//@ts-ignore
import { useSearchParams } from 'next/navigation'
//@ts-ignore
import { useState, useEffect } from 'react'
import { Videolist } from '@/types/typing/video';


export default function VideoDetail() {
  const [data, setData] = useState<Videolist>(null)

  const searchParams = useSearchParams();
  const name = searchParams.get('v');
  const endpoint = `/api/video/one/${name}`;

  useEffect(() => {
    fetch(endpoint, { cache: "no-store", })
      .then((res) => res.json())
      .then((data: Videolist) => {
        setData(data)
      })
  }, [])


  return (
    <>
      <h3 className="uk-card-title">{data}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </>
  )
}
