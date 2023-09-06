'use client'

//@ts-ignore
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get('v');
  const size = searchParams.get('size');
  const url = `/api/video/play/${search}/${size}`;

  return (
    <>
      <video id="videoPlayer" width="650" controls autoPlay >
        <source src={url} type="video/mp4" />
      </video>
    </>
  )
}
