const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  create: async (data, callBack) => {
    try {
      const result = await prisma.users.create({
        data: {
          fullName: data.fullName,
          userName: data.userName,
          email: data.email,
          password: data.password,
        },
      });
      callBack(null, result);
    } catch (error) {
      callBack(error);
    }
  },

  getUserByUserEmail: async (email, callBack) => {
    try {
      const result = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });
      callBack(null, result);
    } catch (error) {
      callBack(error);
    }
  },

  getUserByUserId: async (id, callBack) => {
    try {
      const result = await prisma.users.findUnique({
        where: {
          user_id: id,
        },
        include: {
          destinations: true,
          favorites: true,
        },
      });
      callBack(null, result);
    } catch (error) {
      callBack(error);
    }
  },

  getUsers: async (callBack) => {
    try {
      const results = await prisma.users.findMany({
        include: {
          destinations: true,
          favorites: true,
        },
      });
      callBack(null, results);
    } catch (error) {
      callBack(error);
    }
  },

  updateUser: async (data, callBack) => {
    try {
      const result = await prisma.users.update({
        where: {
          user_id: data.user_id,
        },
        data: {
          fullName: data.fullName,
          userName: data.userName,
          email: data.email,
          password: data.password,
        },
      });
      callBack(null, result);
    } catch (error) {
      callBack(error);
    }
  },

  deleteUser: async (id, callBack) => {
    try {
      const result = await prisma.users.delete({
        where: {
          user_id: id,
        },
      });
      callBack(null, result);
    } catch (error) {
      callBack(error);
    }
  },
};
