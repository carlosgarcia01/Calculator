const Operation = require('../models/operation')
const OperationService = require('../services/service');
const { getAllOperations } = require('../services/service');
module.exports = {

  async getAllOperations(req,res){
    const result = await OperationService.getAllOperations();
    return res.json({"Operations": result})
  },

   getAdd(req,res) {
    const {n1,n2} = req.params;
    const operation = new Operation({
      number1:n1,
      number2:n2
    });
    let answer =  operation.add(n1,n2);
    const message = `Answer: ${n1} + ${n2} = ${answer}`
    res.json({'Message: ': message})
  },
  getSubtract(req,res) {
    const {n1,n2} = req.params;
    const operation = new Operation({
      number1:n1,
      number2:n2
    });
    let answer =  operation.subtract(n1,n2);
    const message = `Answer: ${n1} - ${n2} = ${answer}`
    res.json({'Message: ': message})
  },
 async postAdd(req,res){
    const {n1,n2} = req.body;
    const operation = new Operation({
      number1:n1,
      number2:n2
    });
    const message = `Answer: ${n1} + ${n2} = ${operation.add(n1,n2)}`;
    operation.operation =  message;
    await OperationService.postOperation(operation);
    res.json({'Message: ': message})

  },
  async postSubtract(req,res){
    const {n1,n2} = req.body;
    const operation = new Operation({
      number1:n1,
      number2:n2
    });
    const message = `Answer: ${n1} - ${n2} = ${operation.subtract(n1,n2)}`;
    operation.operation =  message;
    await OperationService.postOperation(operation);
    res.json({'Message: ': message})
  }

}