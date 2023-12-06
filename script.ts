import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser() {
  const newUser = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
    },
  });

  console.log('Novo usuário criado:', newUser);
}

async function getAllUsers() {
  const allUsers = await prisma.user.findMany();
  console.log('Todos os usuários:', allUsers);
}

async function updateUser(userId: number, newAttributes: { name?: string; email?: string }) {
  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: newAttributes,
  });

  console.log('Usuário atualizado:', updatedUser);
}

async function deleteUser(userId: number) {
  const deletedUser = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  console.log('Usuário excluído:', deletedUser);
}

async function main() {
//   await createUser();
//   await getAllUsers();

  const userIdToUpdate = 3;

//   await updateUser(userIdToUpdate, { name: 'Updated Name' });
//   await getAllUsers();

  await deleteUser(userIdToUpdate);
  await getAllUsers();

  await prisma.$disconnect();
}

main().catch((e) => {
  throw e;
});
