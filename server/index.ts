import express from 'express'
import api from './utils/api'
import Config from './config'
import cors from 'cors'

async function main() {
  const app = express()
  const config = await Config.getInstance()
  const port = config.configuration.server.port

  app.use(express.json())

  app.use(
    cors({
      origin: '*',
      optionsSuccessStatus: 200,
    }),
  )

  api(app)

  app.listen(port, () => {
    console.log('server na porta ', port)
  })
}

main().catch((error) => {
  throw error
})
