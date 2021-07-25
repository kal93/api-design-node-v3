import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ message: 'Hello' })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'Ok' })
})
app.get('/data', (req, res) => {
  res.send({ message: '/data hello' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

app.post('/saveItem', (req, res) => {
  console.log(`This was your request body...${JSON.stringify(req.body)}`)
  console.log(`This was your request headers...${JSON.stringify(req.headers)}`)
  console.log(`This was your request IP address...${JSON.stringify(req.ip)}`)
  console.log(
    `This was your request http version...${JSON.stringify(req.httpVersion)}`
  )
  console.log(`This was your host name...${JSON.stringify(req.hostname)}`)

  //   console.log(`This is your response...${JSON.stringify(res.app)}`)
  console.log(req.body, '...')
  res.send(302)
})

export const start = () => {
  app.listen(3000, () => {
    console.log(`Server running on 3000...`)
  })
}
