const express = require('express');
const { loginUser, addUserLog, getAllUserLogs } = require('../Controller/users.controller');
const userRouter = express.Router();

userRouter.post('/login', loginUser)
userRouter.post('/addlog', addUserLog)
userRouter.get('/getlogs', getAllUserLogs)

module.exports = {
    userRouter
}