const prisma = require("../db");

const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
};

const createUser = async (req, res) => {
  const { name, phone } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      phone,
    },
  });

  res.json(user);
};

module.exports = {
  getUsers,
  createUser,
};