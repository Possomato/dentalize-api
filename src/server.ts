import Express from 'express'

const app = Express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT)