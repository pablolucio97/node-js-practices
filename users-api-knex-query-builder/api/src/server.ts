import express from 'express'
import routes from '../routes'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen('3335', () => {
    console.log('Server running at 3335 port')
})




