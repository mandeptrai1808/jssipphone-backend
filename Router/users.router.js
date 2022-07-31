const express = require('express');
const { loginUser } = require('../Controller/users.controller');
const userRouter = express.Router();

userRouter.post('/login', loginUser)

module.exports = {
    userRouter
}