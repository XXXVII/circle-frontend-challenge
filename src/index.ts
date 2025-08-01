import express, { Request, Response, NextFunction } from 'express'
import booksRouter from './router/booksRouter'
import { errorHandler } from './middleware/errorHandler'
import ErrorHandler from './utils/ErrorHandler'
import cors from 'cors'

const app = express()
const port = parseInt(process.env.PORT || '8000', 10)

app.use(express.json())
app.use(cors())

app.use('/books', booksRouter)

app.use((_req: Request, _res: Response, next: NextFunction) => {
    next(new ErrorHandler('Route not found', 404))
})

app.use(errorHandler)

app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Example app listening at http://0.0.0.0:${port}`)
})
