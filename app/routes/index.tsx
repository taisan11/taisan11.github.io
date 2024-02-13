import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Mlink from './mlink'
import type { Meta } from '../types'

const className = css`
  font-family: sans-serif;
`

export default createRoute((c) => {
  return c.render(
    <div class="tyuusinn">
      <h1>taisanサイト</h1>
      <p>Not English</p>
      <p>ここでは適当にいろいろ書いてくよ</p>
      <div class="menu">
        <h2>めにゅー(記事)</h2>
        <Mlink to="test" title="aaa" date="******"/>
      </div>
      <p>©taisan11</p>
    </div>,
    { title: "taisanサイト" }
  )
})
