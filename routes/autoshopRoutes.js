const express = require('express');
const router = express.Router()
const authControler = require('./../controlers/authControler');
const autoshopControler = require('./../controlers/autoshopControler')

 

router
.route('/')
.get(authControler.protect,autoshopControler.getAllAutoshops)
.post(autoshopControler.createAutoshop)
router
.route('/:id')
.get(autoshopControler.getAutoshop)
.patch(autoshopControler.updateAutoshop)
.delete(
    authControler.protect,
    authControler.restrictTo('admin'),
    autoshopControler.deleteAutoshop
    )

module.exports = router;