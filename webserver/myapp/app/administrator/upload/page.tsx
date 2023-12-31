"use client";
import { create } from './actions';
//@ts-ignore
import { useSession } from "next-auth/react";

export default function Upload() {
  const { data: session } = useSession();
  return (
    <div>
      <h1 className="uk-text-center">動画をアップロード</h1>

      <div className="uk-margin uk-text-center uk-padding" uk-margin="true">
        <form action={create} className="uk-first-column">
          <div uk-form-custom="target: true" suppressHydrationWarning={true}>
            <input type="hidden" name="id" value={session?.user?.id || 0} />
            <input type="file" name="file" aria-label="Custom controls" required />
            <input className="uk-input uk-form-width-medium" type="text" placeholder="Select file" aria-label="Custom controls" disabled />
          </div>
          <button className="uk-button uk-button-default" type="submit">
            Add
          </button>
        </form>
      </div>
    </div >
  )
}
