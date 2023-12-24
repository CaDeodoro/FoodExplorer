import { LoginController } from '../Controllers/Login/login'

const loginController = new LoginController()

const loginRouter = Router()

loginRouter.post('/', loginController.create)

export { loginRouter }
