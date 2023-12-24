const { Router } = require('express')
const { UserController } = require('../Controllers/User/UserController')

const userRouter = Router()
const userController = new UserController()

userRouter.post('/', userController.create)
userRouter.get('/', userController.findAll)
userRouter.get('/:id', userController.findOne)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

module.exports = userRouter
