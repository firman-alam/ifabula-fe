const express = require('express')
const app = express()
const PORT = 5000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/user', require('./routes/user'))
console.log('ok')
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
