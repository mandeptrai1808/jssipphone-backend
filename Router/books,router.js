const express = require('express');
const { createNewAddress, getAddressByUserId, updateAddress } = require('../Controller/books.controller');
const booksRouter = express.Router();

booksRouter.post('/create', createNewAddress)
booksRouter.get('/get/:userId', getAddressByUserId)
booksRouter.put('/update/:id', updateAddress)

module.exports = {
    booksRouter
}