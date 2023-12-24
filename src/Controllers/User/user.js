
class UserController{
  async create(request, response){
    const { email, password } = request.body;

    const user = await prisma.user.findfirst({
      where: { email },
    });

    if (!user) {
      await prisma.user.create(
        user)
      }
    response.status(200).json(user)
    }
  };