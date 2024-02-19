import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Mlink from '../component/mlink'
// import type { Meta } from '../types'

export default createRoute((c) => {
  return c.render(
    <div class="tyuusinn">
      <h1>taisanサイト</h1>
      <p>Not English</p>
      <p>ここでは適当にいろいろ書いてくよ</p>
      <div class="menu">
        <h3>めにゅー(その他)</h3>
        <Mlink to="about" title="自己紹介" date="2024-2-19"/><br />
        <a href="http://" id='dona'>寄付!!(予告)</a>
        <h3>めにゅー(記事)</h3>
        <Mlink to="blog/2024-2-13" title="本日日記#1" date="2024-2-13"/>
      </div>
      <p>©taisan11</p>
    </div>,
    { title: "taisanサイト" }
  )
})
