const {histories} = require('../models');

const newHistory = async (req, res) => {
  const {phone, userId, timeCall} = req.body;
  try {
    const newHistory = await histories.create({phone, userId, timeCall});
    res.status(201).send(newHistory);
  } catch (error) {
    res.status(500).send(error)
  }
}

const getHistoriesByUserId = async (req,res) => {
  const {userId} = req.params;
  try {
    let result = await histories.findAll({where: {userId}});
    res.send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
    newHistory,
    getHistoriesByUserId
}