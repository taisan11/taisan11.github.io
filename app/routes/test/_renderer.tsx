import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" />
        <link rel='stylesheet' href='/static/style.css' />
      </head>
      <body class="tyuusinn">{children}</body>
    </html>
  )
})
