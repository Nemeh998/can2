'use strict';

const myOwnerModel = require("../Modal/cat");

function addCat(req,res){
    console.log(req.body)
// let body=req.body
let { addcatname, addbreed, owneName }=req.body;
myOwnerModel.find({name:owneName},(error,ownerData)=>{

if(error){
    res.send('cant find user')}
    else{
 console.log(ownerData,'befor saveownerData')
 ownerData[0].cats.push({
   
        catName: addcatname, 
        breed: addbreed


 })

 ownerData[0].save();
 console.log(ownerData[0],'after saveownerData')

//  res.send(ownerData[0].cats)
    }
}

)
}

module.exports=addCat;