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
  const nameSplit = name.split('.');
  const endpoint = `/api/video/one/${nameSplit[0]}`;

  useEffect(() => {
    fetch(endpoint, { cache: "no-store", })
      .then((res) => res.json())
      .then((data: Videolist) => {
        setData(data);
      })
  }, [])


  return (
    <>
      <h3 className="uk-card-title">{data.title}</h3>
      <p>カテゴリー: {data.category}</p>
      <p>タグ: {data.tags.join(',')}</p>
      <hr></hr>
      <h3>概要</h3>
      <p>{data.explain}</p>
    </>
  )
}
