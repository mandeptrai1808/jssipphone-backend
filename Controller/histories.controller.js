const {histories, users} = require('../models');

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

const getAllHistories = async (req, res) => {
  try {
    let result = await histories.findAll();
    if (result.length === 0) res.send(result);
    else
    result.map(async (item, index) => {
      let user = await users.findOne({where: {id: item.userId}})
      result[index] = {infoCall: result[index], infoUser: user};
      if (index === result.length - 1) res.send(result);
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
    newHistory,
    getHistoriesByUserId,
    getAllHistories
}