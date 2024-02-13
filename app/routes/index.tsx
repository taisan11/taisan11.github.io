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
        <h2>めにゅー(記事)</h2>
        <Mlink to="blog/2024-2-13" title="本日日記#1" date="2024-2-13"/>
      </div>
      <p>©taisan11</p>
    </div>,
    { title: "taisanサイト" }
  )
})
