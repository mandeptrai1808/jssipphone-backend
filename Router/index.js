const express = require('express');
const {userRouter} = require('./users.router')
const {historiesRouter} = require('./histories.router')
const {booksRouter} = require('./books,router')
const rootRouter = express.Router();

rootRouter.use('/users', userRouter)
rootRouter.use('/histories', historiesRouter)
rootRouter.use('/books', booksRouter)

module.exports = {
    rootRouter
}