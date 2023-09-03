"use client";
import { VideoHomelist } from '@/types/typing/video';

interface TaskProps {
  task: VideoHomelist;
}

export default function Video({ task }: TaskProps) {
  return (
    <>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-text-center">
          <img src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&amp;w=400&amp;h=200&amp;q=80" alt="" />
        </div>
        <div className="uk-card-body uk-card-small uk-padding-remove uk-margin-small-left uk-margin-small-right">
          <div className="uk-card-title">{task.title}</div>
          <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur nnn adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>
    </>
  )
}
