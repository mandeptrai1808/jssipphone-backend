const { users, userlogs } = require("../models");
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

const addUserLog = async (req,res) => {
  const {content} = req.body;
  try {
    let result = await userlogs.create({content})
    res.send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

const getAllUserLogs = async (req,res) => {
  try {
    let result = await userlogs.findAll();
    res.send(result);
  } catch (error) {
    res.status(500).send(result)
  }
}

module.exports = {
  loginUser,
  addUserLog,
  getAllUserLogs
};
