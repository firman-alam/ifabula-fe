const validateHeaders = require('../utils')
const data = require('../utils/data')

const GetUser = (req, res) => {
  const headers = req.headers

  const validationError = validateHeaders(headers)
  if (validationError) {
    res.status(401).send({ message: validationError, error: true })
  }

  res
    .status(200)
    .send({ message: 'Data berhasil didapat', data: data, error: false })
}

const AddUser = (req, res) => {
  const headers = req.headers

  const validationError = validateHeaders(headers)
  if (validationError) {
    res.status(401).send(validationError)
  }

  const userData = req.body

  data.push(userData)

  res.status(200).send({ message: 'User berhasil ditambahkan', error: false })
}

module.exports = { GetUser, AddUser }
