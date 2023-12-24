const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class UserController {
  async create(request, response) {
    const { name, email, password, isAdmin } = request.body

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      typeof isAdmin !== 'boolean'
    ) {
      console.error('Invalid data type')
      return response.status(400).json({ error: 'Invalid data type' })
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        isAdmin,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    return response.json(user)
  }

  async findAll(request, response) {
    const users = await prisma.user.findMany()

    return response.json(users)
  }

  async findOne(request, response) {
    const { id } = request.params

    const user = await prisma.user.findUnique({
      where: { id },
    })

    return response.json(user)
  }

  async update(request, response) {
    const { id } = request.params
    const { name, email, password, isAdmin } = request.body

    const user = await prisma.user.update({
      where: { id },
      data: { name, email, password, isAdmin },
    })

    return response.json(user)
  }

  async delete(request, response) {
    const { id } = request.params

    const user = await prisma.user.delete({
      where: { id },
    })

    return response.json(user)
  }
}

module.exports = { UserController }
