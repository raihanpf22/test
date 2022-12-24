import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World! dari server')
})
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})