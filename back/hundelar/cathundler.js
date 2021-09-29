'use strict';

const myOwnerModel=require('../Modal/cat')
// http://localhost:4001/cat?onername=
function cathundler(req,res){
let ownername=req.query.onername;
// اسم الموديل .find
// find = pbject , function
myOwnerModel.find({name:ownername},function(error,ownerData){
if(error){
  res.send(error)  
}else{
    res.send(ownerData)
    // console.log(ownerData[5].cats)
}



})
// res.send('work')
}
module.exports=cathundler;