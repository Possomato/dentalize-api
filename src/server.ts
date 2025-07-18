import Express, { Request, Response } from 'express'
import { ZodError } from 'zod'
import { AppError } from './utils/AppError'

import { routes } from './routes'

const app = Express()
app.use(Express.json())

const PORT = 8000

app.use(routes)

app.use((error: any, req: Request, res: Response, _: any) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message })
  }

  if (error instanceof ZodError) {
    res
      .status(400)
      .json({ message: 'Validation error!', issues: error.format() })
    return
  }

  res.status(500).json({ message: error.message })
})

app.listen(PORT, () => console.log(`I'm running at http://localhost:${PORT}`))
