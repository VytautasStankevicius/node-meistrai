const fs = require('fs');
const Autoshop = require('../models/autoshopModel');
const APIFeatures = require('../utils/apiTools')

exports.getAllAutoshops = async (req,res)=>{
    console.log(req.query)
    try{
        const autoshopsData = new APIFeatures(Autoshop.find(),req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()
        const autoshops = await autoshopsData.query;
        res
        .status(200)
        .json({
            status:'sucess',
            results:autoshops.length,
            data:{
              autoshops
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err.message
        })
    }
};
 
 
exports.createAutoshop = async (req, res)=>{
    try{
        const newAutoshop = await Autoshop.create(req.body)
        res
        .status(201)
        .json({
            status:'success',
            message: "New autoshop created",
            data: newAutoshop
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err.message
        })
    }    
};
 
exports.getAutoshop = async (req,res)=>{
    try{
        const autoshop = await Autoshop.findById(req.params.id)
        res
    .status(200)
    .json({
        status:'success',
        data:{
            autoshop
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
    
};
 
exports.updateAutoshop = async(req,res)=>{
    try{
        const autoshop = await Autoshop.findByIdAndUpdate(req.params.id,req.body,{
            runValidators: true
        })
        res
    .status(200)
    .json({
        status:'success',
        message: "Autoshop Updated",
        data: {
            autoshop
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
    
};
 
exports.deleteAutoshop = async (req,res)=>{
    try{
        await Autoshop.findByIdAndDelete(req.params.id);
        res
    .status(200)
    .json({
        status:'success',
        message: "Autsohop deleted",
        data: null
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message:err
        })
    }
};