'use client'
//@ts-ignore
import { useSearchParams } from 'next/navigation'

const options = [
  { value: '映画とアニメ', label: '映画とアニメ' },
  { value: '自動車、乗り物', label: '自動車、乗り物' },
  { value: '音楽', label: '音楽' },
  { value: 'ペットと動物', label: 'ペットと動物' },
  { value: 'スポーツ', label: 'スポーツ' },
  { value: '旅行とイベント', label: '旅行とイベント' },
  { value: 'ゲーム', label: 'ゲーム' },
  { value: 'ブログ', label: 'ブログ' },
  { value: 'コメディ', label: 'コメディ' },
  { value: 'エンターテイメント', label: 'エンターテイメント' },
  { value: 'ニュースと政治', label: 'ニュースと政治' },
  { value: 'ハウツーとスタイル', label: 'ハウツーとスタイル' },
  { value: '教育', label: '教育' },
  { value: '科学と技術', label: '科学と技術' },
  { value: '非営利団体と社会活動', label: '非営利団体と社会活動' },
]

export default function Home() {
  const searchParams = useSearchParams()
  const search = searchParams.get('name')
  console.log(search);

  return (
    <div>
      <form>
        <h1>動画詳細</h1>
        <h3>タイトル</h3>
        <input className="uk-input" type="text" />
        <h3>説明</h3>
        <textarea className="uk-textarea" />
        <h3>タグ</h3>
        <h3>サムネイル</h3>
        <div uk-form-custom="true">
          <input type="file" aria-label="Custom controls" />
          <button className="uk-button uk-button-default" type="button" tabIndex="-1">Select</button>
        </div>
        <h3>カテゴリー</h3>
        <select className="uk-select">
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="uk-padding">
          <button className="uk-button uk-button-primary uk-width-1-1">登録する</button>
        </div>
      </form>
    </div>
  )
}
