'use strict'
const Operation = require('../models/operation');
const mongoose = require('mongoose');

module.exports = {

  async getAllOperations(){
    const operations = await Operation.find();
    return operations;
  },

  async postOperation(newOperation){
    let result = await newOperation.save();
    return result;
  }

}