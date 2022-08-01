const express = require('express');
const { newHistory, getHistoriesByUserId, getAllHistories } = require('../Controller/histories.controller');
const historiesRouter = express.Router();

historiesRouter.post('/create', newHistory)
historiesRouter.get('/get/:userId', getHistoriesByUserId)
historiesRouter.get('/getall', getAllHistories)

module.exports = {
    historiesRouter
}