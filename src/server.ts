import dotenv from 'dotenv'
dotenv.config()

import * as sapper from '@sapper/server'
import compression from 'compression'
import polka from 'polka'
import sirv from 'sirv'

const { PORT, mode, API_URL } = process.env
const dev: boolean = mode === 'development'

const app = polka()

app
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: () => ({
        API_URL,
      }),
    }),
  )
  .listen(PORT, (err: any) => {
    if (err) console.log('error', err)
  })
