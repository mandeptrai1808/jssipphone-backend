const { books } = require("../models");

const createNewAddress = async (req, res) => {
  const { phone, name, userId } = req.body;
  try {
    const newAddress = await books.create({ phone, name, userId });
    res.status(201).send(newAddress);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAddressByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await books.findAll({ where: { userId } });
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateAddress = async (req, res) => {
  const { userId, phone, name } = req.body;
  const { id } = req.params;
  try {
    console.log(req.body)
    await books.update({name, phone}, {where: {id}})
    const result = await books.findOne({where: {id}})
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createNewAddress,
  getAddressByUserId,
  updateAddress,
};
