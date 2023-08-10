'use client';
//@ts-ignore
import Link from 'next/link';

export default function Adminsidebar() {
  return (
    <div>
      <ul class="uk-list">
        <li><Link className="uk-link-text" href="/administrator">動画ダッシュボード</Link></li>
        <li><Link className="uk-link-text" href="/administrator/upload">動画アップロード</Link></li>
      </ul>
    </div>
  )
}
