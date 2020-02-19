const express = require('express')
const cors = require('cors')

require('dotenv').config()

require('./config/connectDB')()

const app = express()

app.use(express.json({ extended: false }))
app.use(cors())

app.use('/api/auth', require('./routes/api/auth'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
