import VideoWatch from './video-watch'
import VideoDetail from './video-detail'

export default function Home() {
  return (
    <>
      <div className="uk-background-muted uk-padding uk-margin">
        <div uk-grid="true" className="uk-grid">
          <div className="uk-card uk-card-default uk-width-3-4 uk-align-center uk-padding-remove  uk-first-column">
            <div className="uk-card-media-top">
              <VideoWatch />
            </div>
            <div className="uk-card-body">
              <VideoDetail />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
