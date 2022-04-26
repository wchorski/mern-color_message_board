require('dotenv').config()
const PORT = process.env.PORT || 3001;
//TODO MONGO DB FIX DOCKER COMPOSE
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/myREST_db';
// const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://mongo:27017/myREST_db';


const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')


mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('-- Mongoose Database Live --'))

app.use(express.json())
app.set('json spaces', 2) //? prettyfiy json in browser
app.use(cors())


//? ROUTES ----------------------------------------------
const subscribersRouter = require('./routes/subscribers-rut')
app.use('/subscribers', subscribersRouter)

const formsRouter = require('./routes/forms-ruts')
app.use('/forms', formsRouter)
//? ------------------------------------------------------


app.listen(PORT, () => console.log(`-- Express Server Live -- PORT: ${PORT}`))