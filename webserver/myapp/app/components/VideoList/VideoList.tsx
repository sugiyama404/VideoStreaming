import Video from './Video';

export default function VideoList() {
  const videos = [
    { id: 1, title: 'about' },
    { id: 2, title: 'skills' },
    { id: 3, title: 'values' },
    { id: 4, title: 'skills' },
    { id: 5, title: 'values' },
    { id: 6, title: 'future' }
  ];
  return (
    <>
      {videos.map((video, index: number) => {
        if (index % 3 == 0) {
          return (
            <div className="uk-child-width-1-3 uk-grid-match uk-grid uk-padding-small uk-padding-remove-vertical" uk-grid="true">
              <div className="uk-first-column" key={video.id}>
                <Video task={video} />
              </div>
              <div key={video.id + 1}>
                <Video task={videos[index + 1]} />
              </div>
              <div key={video.id + 2}>
                <Video task={videos[index + 2]} />
              </div>
            </div>
          )
        }
      })}
    </>
  )
}
