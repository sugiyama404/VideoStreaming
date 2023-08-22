'use client'
//@ts-ignore
import { useSearchParams, useRouter } from 'next/navigation'
//@ts-ignore
import React, { useState } from "react";
//@ts-ignore
import { TagsInput } from "react-tag-input-component";

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
  const [file, setFile] = useState<File>(null);
  const [selected, setSelected] = useState([""]);
  const searchParams = useSearchParams()
  const search = searchParams.get('name')

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    var extension = file[0].type
    console.log(extension)

    const data = {
      uuid: event.target.uuid.value,
      title: event.target.title.value,
      explain: event.target.explain.value,
      category: event.target.category.value,
      tags: selected,
      extension: extension,
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/video/detail'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)
    const uuid = await response.json()
    console.log(uuid.uuid)

    const tmb_name = uuid.uuid + extension
    const tmb_data = {
      file: file,
      name: tmb_name,
    }
    const tmb_endpoint = '/api/video/upload'
    const tmb_JSONdata = JSON.stringify(tmb_data)
    const tmb_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: tmb_JSONdata,
    }
    const tmb_response = await fetch(tmb_endpoint, tmb_options)
    console.log(tmb_response)
    router.push('/administrator')

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>動画詳細</h1>
        <input type="hidden" name="uuid" value={search} />
        <h3>タイトル</h3>
        <input className="uk-input" type="text" name="title" placeholder="タイトル" />
        <h3>説明</h3>
        <textarea className="uk-textarea" name="explain" placeholder="説明" rows={5} />
        <h3>タグ</h3>
        <TagsInput
          value={selected}
          onChange={setSelected}
          name="fruits"
          placeHolder="enter tags"
        />
        <h3>サムネイル</h3>
        <div uk-form-custom="true">
          <input type="file" aria-label="Custom controls" onChange={(e) => setFile(e.target.files[0])} />
          <button className="uk-button uk-button-default" type="button" tabIndex="-1">Select</button>
        </div>
        <h3>カテゴリー</h3>
        <select className="uk-select">
          {options.map((option) => (
            <option value={option.value} key={option.value} name="category">
              {option.label}
            </option>
          ))}
        </select>
        <div className="uk-padding">
          <button className="uk-button uk-button-primary uk-width-1-1" type="submit">登録する</button>
        </div>
      </form>
    </div>
  )
}
