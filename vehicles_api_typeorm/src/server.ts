import express from 'express'

import './database/connection'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen('3337', () => {
    console.log('Server running at localhost:3337 ✔')
})