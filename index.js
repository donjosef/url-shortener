require('dotenv').config()

const express = require('express')
const connectToDB = require('./dbconnection')
const urlRouter = require('./routes/url')
const redirectRoute = require('./routes/redirect')

const app = express()

app.use(express.json())

app.use('/', redirectRoute)
app.use('/api/url', urlRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
    connectToDB()
    console.log('Server running on http://localhost:' + PORT)
})