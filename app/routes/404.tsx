import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Mlink from '../component/mlink'

export default createRoute((c) => {
  return c.render(
    <div class="tyuusinn">
      <h1>404 のっとふぁうんど</h1>
      <p>Homeに戻ろう!!</p>
      <p>©taisan11</p>
    </div>,
    { title: "404||taisanサイト" }
  )
})
