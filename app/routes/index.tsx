import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Mlink from '../component/mlink'
import type { Meta } from '../types'

export default createRoute((c) => {
  const posts = import.meta.glob<{ frontmatter: Meta }>('./blog/*.mdx', {
    eager: true,
  })
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
        {Object.entries(posts).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <>
              <Mlink to={`${id.replace(/\.mdx$/, '')}`} title={module.frontmatter.title} date={`${id.replace(/\/blog\/(\d{4}-\d{2}-\d{2})/,'$1')}`}/><br/>
              </>
            )
          }
        })}
      </div>
      <p>©taisan11</p>
    </div>,
    { title: "taisanサイト" }
  )
})
