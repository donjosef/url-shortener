require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectToDB = require('./dbconnection')
const urlRouter = require('./routes/url')
const redirectRoute = require('./routes/redirect')

const app = express()

app.use(cors({
    origin: 'https://donjosef.github.io'
}))
app.use(express.json())

app.use('/', redirectRoute)
app.use('/api/url', urlRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    connectToDB()
    console.log('Server running on http://localhost:' + PORT)
})