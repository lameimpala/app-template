import express from 'express'
import route from './route'

const router = express.Router()

router.use('/route', route)

export default router
