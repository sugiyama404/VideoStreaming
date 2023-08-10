export default function Upload() {
  return (
    <div>
      <h1 className="uk-text-center">動画をアップロード</h1>
      <form >
        <div className="uk-margin uk-text-center uk-padding" uk-margin="true">
          <div uk-form-custom="target: true" suppressHydrationWarning={true}>
            <oninput type="file" name="file" />
            <input className="uk-input uk-form-width-medium" type="text" placeholder="Select file" aria-label="Custom controls" disabled />
          </div>
          <button className="uk-button uk-button-default" type="submit">
            Add
          </button>
        </div>
      </form>
    </div >
  )
}
