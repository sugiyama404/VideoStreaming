"use client";
import { VideoHomelist } from '@/types/typing/video';
// @ts-ignore
import Image from 'next/image'
interface TaskProps {
  task: VideoHomelist;
}

export default function Video({ task }: TaskProps) {
  return (
    <>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-text-center">
          <Image className="uk-border-circle" width={220} height={300} src={'/api/image/v/' + task.imguuid + '.' + task.imgext + "?heigh=220&width=300"} alt="" />
        </div>
        <div className="uk-card-body uk-card-small uk-padding-remove uk-margin-small-left uk-margin-small-right">
          <div className="uk-card-title">{task.title}</div>
          <p className="uk-margin-remove">{task.explain}</p>
        </div>
      </div>
    </>
  )
}
