const { Router } = require('express')
const userRouter = require('./user.routes')
// const loginRouter = require('./login.routes')
// const foodsRouter = require('./foods.routes')
// const categoryRouter = require('./category.routes')

const routes = Router()

routes.use('/users', userRouter)
// routes.use('/login', loginRouter)
// routes.use('/foods', foodsRouter)
// routes.use('/category', categoryRouter)

module.exports = routes
