import VideoList from '@/app/components/VideoList/VideoList';
import { VideoHomelist } from '@/types/typing/video';
//@ts-ignore
const target: string = process.env.NEXTAUTH_URL;

async function getVideoFindAll() {
  const endpoint = target + '/api/video/homelist';
  const res = await fetch(endpoint, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data: VideoHomelist[] = await getVideoFindAll();
  return (
    <>
      <VideoList videos={data} />
    </>
  )
}
