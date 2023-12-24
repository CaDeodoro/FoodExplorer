const cors = require('cors')
const express = require('express')
const { json } = require('express')
const routes = require('./routes/index')

const app = express()
app.use(cors())
app.use(json())

app.use(routes)

const PORT = process.env.PORT || 3332
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
