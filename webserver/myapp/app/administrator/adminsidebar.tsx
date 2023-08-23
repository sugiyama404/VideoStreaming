'use client';
//@ts-ignore
import Link from 'next/link';

export default function Adminsidebar() {
  return (
    <div>
      <ul className="uk-list">
        <li><Link className="uk-link-text" href="/administrator">動画ダッシュボード</Link></li>
        <li><Link className="uk-link-text" href="/administrator/upload">動画アップロード</Link></li>
        <li><Link className="uk-link-text" href="/administrator/videodetail?name=e08917b6-4158-11ee-87ce-0242ac170002">動画詳細</Link></li>
      </ul>
    </div>
  )
}
