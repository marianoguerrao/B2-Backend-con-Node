const UserModel = require('../models/User')

function create (req, res, next) {
  let newUser = new UserModel(req.body)
  newUser.save((err, User) => {
    if (err) {
      res.status(409).json({ status: 'error', message: 'Manda los datos requeridos' })
    }
    res.status(200).json({ status: 'success', message: 'El User ha sido registrado', data: User })
  })
}

function findAll (req, res, next) {
  UserModel.find({}, (err, Users) => {
    if (err) {
      res.status(404).json({ status: 'error', message: 'Users no encontrados' })
    }
    res.status(200).json({ status: 'success', message: 'Users encontrados', data: Users })
  })
}

function findById (req, res, next) {
  UserModel.findOne({ _id: req.params.id }, (err, User) => {
    if (err) {
      res.status(404).json({ status: 'error', message: 'No se encontro User', data: null })
    }
    res.status(200).json({ status: 'success', message: 'User encontrado', data: User })
  })
}

function removeUser (req, res, next) {
  UserModel.findOne({ _id: req.params.id }, (err, User) => {
    if (err) {
      throw err
    }
    User.remove()
    res.status(200).json({ status: 'success', message: `El User ${User.name} ha sido removido de la base de datos` })
  })
}

function updateUser (req, res, next) {
  UserModel.findOneAndUpdate({ _id: req.params.id }, { $set: req.body, updatedAt: Date.now() }, (err, User) => {
    if (err) {
      res.status(400).json({ status: 'error', message: err.message })
    }
    res.status(200).json({ status: 'success', message: `El User ${User.name} ha sido modificado del valor ${JSON.stringify(req.body)}` })
  })
}

module.exports = {
  create,
  findAll,
  removeUser,
  findById,
  updateUser
}
