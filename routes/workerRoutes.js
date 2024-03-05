const express = require('express');
const router = express.Router()
const authControler = require('./../controlers/authControler');
const workerControler = require('./../controlers/workerControler')

 

router
.route('/')
.get(authControler.protect,workerControler.getAllWorkers)
.post(workerControler.createWorker)
router
.route('/:id')
.get(workerControler.getWorker)
.patch(workerControler.updateWorker)
.delete(
    authControler.protect,
    authControler.restrictTo('admin'),
    workerControler.deleteWorker
    )
router
.route('/liked/:id')
.patch(workerControler.updateLikeWorker)
module.exports = router;