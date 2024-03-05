const fs = require('fs');
const Worker = require('../models/workerModel');
const APIFeatures = require('../utils/apiTools')

exports.getAllWorkers = async (req,res)=>{
    console.log(req.query)
    try{
        const workersData = new APIFeatures(Worker.find(),req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()
        const workers = await workersData.query;
        res
        .status(200)
        .json({
            status:'sucess',
            results:workers.length,
            data:{
              workers
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err.message
        })
    }
};
 

exports.createWorker = async (req, res)=>{
    try{
        const newWorker = await Worker.create(req.body)
        res
        .status(201)
        .json({
            status:'success',
            message: "New worker created",
            data: newWorker
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err.message
        })
    }    
};
 
exports.getWorker = async (req,res)=>{
    try{
        const worker = await Worker.findById(req.params.id)
        res
    .status(200)
    .json({
        status:'success',
        data:{
            worker
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
    
};
 
exports.updateWorker = async(req,res)=>{
    try{
        const worker = await Worker.findByIdAndUpdate(req.params.id,req.body,{
            runValidators: true
        })
        res
    .status(200)
    .json({
        status:'success',
        message: "Worker Updated",
        data: {
            worker
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
};
 

exports.updateLikeWorker = async(req,res)=>{
    try{
        const worker = await Worker.findByIdAndUpdate(req.params.id,req.body,{
            runValidators: true
        })
        res
    .status(200)
    .json({
        status:'success',
        message: "Worker Updated",
        data: {
            worker
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
};
exports.deleteWorker = async (req,res)=>{
    try{
        await Worker.findByIdAndDelete(req.params.id);
        res
    .status(200)
    .json({
        status:'success',
        message: "Worker deleted",
        data: null
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
};