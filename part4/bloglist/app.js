const express = require('express')
const app = express()
const config = require('./utils/config')
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

const blogsRouter = require('./controllers/blogs')
app.use('/api/blogs', blogsRouter)


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())

module.exports = app