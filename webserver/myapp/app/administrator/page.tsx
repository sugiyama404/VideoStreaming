import { Videolist } from '@/types/typing/video';
//@ts-ignore
const target: string = process.env.NEXTAUTH_URL;

async function fetchData() {
  const endpoint = target + '/api/video/list'
  const res = await fetch(endpoint, {
    cache: "no-store",
  });
  const data: Videolist[] = await res.json();
  return data
}

export default async function Home() {
  const data: Videolist[] = await fetchData();
  return (
    <div>
      <h1>動画ダッシュボード</h1>
      <h2>動画一覧</h2>
      <table className="uk-table uk-table-middle uk-table-divider">
        <thead>
          <tr>
            <th>タイトル</th>
            <th>説明</th>
            <th>タグ</th>
            <th>カテゴリー</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v) => (
            <tr key={v.id}>
              <td>{v.title}</td>
              <td>{v.explain}</td>
              <td>{v.tags.join(',')}</td>
              <td>{v.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
