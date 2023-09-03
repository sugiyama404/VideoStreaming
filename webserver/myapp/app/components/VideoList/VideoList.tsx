import Video from './Video';
import { VideoHomelist } from '@/types/typing/video';

interface VideoHomelistProps {
  videos: VideoHomelist[];
}

export default function VideoList({ videos }: VideoHomelistProps) {
  return (
    <>
      {videos.map((video, index: number) => {
        if (index % 3 == 0) {
          return (
            <div className="uk-child-width-1-3 uk-grid-match uk-grid uk-padding-small uk-padding-remove-vertical" uk-grid="true">
              <div className="uk-first-column" key={index}>
                <Video task={video} />
              </div>
              <div key={index + 1}>
                <Video task={videos[index + 1]} />
              </div>
              <div key={index + 2}>
                <Video task={videos[index + 2]} />
              </div>
            </div>
          )
        }
      })}
    </>
  )
}
