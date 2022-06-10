import express from 'express'
import config from 'config'

import webapp from './webapp'
import api from './api'
import applyMiddleware from './apply-middleware'

const router = express.Router()

router.use('/health', (req, res) => { res.sendStatus(200) })
router.use('/api', api)
router.use('/', webapp)

const app = express()

applyMiddleware(app)
app.use(config.get('contextRoot'), router)

app.listen(3001, () => console.log('listening on 3001!'))
