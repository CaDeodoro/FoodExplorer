import { request, response } from 'express'
import jwt from 'jsonwebtoken'

export class LoginController {
  async create(request, response) {
    const { email, password } = request.body

    const user = await prisma.user.findfirst({
      where: { email, password },
    })

    if (!user) {
      return response.status(400).json({ error: 'User not found' })
    }

    const token = jwt.sign({ id: user.id })

    request.user = user

    return response.json({ token })
  }
}
