import express from 'express'
import { login } from '../controller/authController'
import { addFile, createServer, getAllServers, purgeServer, serverInfo } from '../controller/serverController'

const mainRouter = express.Router()

mainRouter.get('/', (req, res, next) => {
    res.send('ARUS Test ')
})

mainRouter.post('/auth/login', login)

mainRouter.get('/servers', getAllServers)
mainRouter.get('/server', serverInfo)
mainRouter.put('/server', purgeServer)
mainRouter.post('/server', createServer)
mainRouter.patch('/server', addFile)

export default mainRouter