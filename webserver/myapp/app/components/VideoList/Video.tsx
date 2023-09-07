"use client";
import { VideoHomelist } from '@/types/typing/video';
// @ts-ignore
import Image from 'next/image'
// @ts-ignore
import Link from 'next/link'


interface TaskProps {
  task: VideoHomelist;
}

export default function Video({ task }: TaskProps) {
  return (
    <>
      <Link href={"watch?v=" + task.uuid + ".mp4&size=" + task.size} >
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top uk-text-center">
            <Image height={300} width={400} src={'/api/image/v/' + task.imguuid + '.' + task.imgext + "?heigh=300&width=400"} alt="" />
          </div>
          <div className="uk-card-body uk-card-small uk-padding-remove uk-margin-small-left uk-margin-small-right">
            <div className="uk-card-title">{task.title}</div>
            <p className="uk-margin-remove">{task.explain}</p>
          </div>
        </div>
      </Link >
    </>
  )
}
