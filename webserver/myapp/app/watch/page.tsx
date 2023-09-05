// 'use client'

//@ts-ignore
// import { useSearchParams } from 'next/navigation'

export default function Home() {
  // const searchParams = useSearchParams()
  // const search = searchParams.get('v')
  const search = "164583b8-47d5-11ee-8cd5-0242ac170003.mp4"
  // const size = searchParams.get('size')

  return (
    <>
      <video id="videoPlayer" width="650" controls autoPlay>
        <source src={"/api/video/play/" + search} type="video/mp4" />
      </video>
    </>
  )
}
