
import { Application, json } from 'express'
import cookieParser from 'cookie-parser'

const middlewares = [
    json(),
    cookieParser()
]

export default function applyMiddleware (app: Application) {
    middlewares.forEach((middleware) => {
        app.use(middleware)
    })
}
