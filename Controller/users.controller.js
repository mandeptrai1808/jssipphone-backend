const { users } = require("../models");
const bcrypt = require("bcryptjs");

const loginUser = async (req, res) => {
  const { username } = req.body;
  try {
    let result = {};
    if ((result = await users.findOne({ where: { username } }))) {
    } else {
      result = await users.create({ username });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  loginUser,
};
