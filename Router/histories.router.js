const express = require('express');
const { newHistory, getHistoriesByUserId } = require('../Controller/histories.controller');
const historiesRouter = express.Router();

historiesRouter.post('/create', newHistory)
historiesRouter.get('/get/:userId', getHistoriesByUserId)

module.exports = {
    historiesRouter
}