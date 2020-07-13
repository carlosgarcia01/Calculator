const { Schema, model } = require('mongoose');


const OperationSchema = new Schema({
  number1:{type:Number,required:false,default:0},
  number2:{type:Number,required:false,default:0},
  operation:{type:String,required:false,default:0},
});


OperationSchema.methods.add =  (number1,number2) =>{
  if(typeof(number1)!=String || typeof(number2)!=String ){
    number1=parseFloat(number1);
    number2=parseFloat(number2);  
  } 
  const result =  number1 + number2;
  return result;
};


OperationSchema.methods.multiply =  (number1,number2) =>{
  if(typeof(number1)!=String || typeof(number2)!=String ){
    number1=parseFloat(number1);
    number2=parseFloat(number2);  
  } 
  const result =  number1 * number2;
  return result;
};

OperationSchema.methods.divide =  (number1,number2) =>{
  if(typeof(number1)!=String || typeof(number2)!=String ){
    number1=parseFloat(number1);
    number2=parseFloat(number2);  
  } 
  let result;
  if(number2 === 0){
    result = 'No se puede dividir entre 0';
  }else{
    result =  number1 / number2;
  }
  return result;
};

OperationSchema.methods.subtract = (number1,number2) =>{
  if(typeof(number1)!=String || typeof(number2)!=String ){
    number1=parseFloat(number1);
    number2=parseFloat(number2);  
  } 
  const result =  number1 - number2;
  return result;
}

module.exports = model('Operation',OperationSchema);