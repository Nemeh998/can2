'use strict';

const myOwnerModel = require("../Modal/cat");

 function deletehundler(req,res){

console.log(req.params)
console.log(req.query)
// { catId: '1' }

// { ownerName: 'nemh' }
let index=Number(req.params.catId);
let ownerName=req.params.ownerName;
myOwnerModel.find({name:ownerName},(error,ownerData)=>{
if(error){
    res.send('cant find user')}
    else{
        console.log('after delete',ownerData[0].cats)
let newCatArr=ownerData[0].cats.filter((cat,idx)=>{
if (idx !== index ){
    return  cat
}
})
console.log(newCatArr)
ownerData[0].cats=newCatArr
console.log('after delete',ownerData[0].cats)
ownerData[0].save()
// res.send()
    }

})



 }
 module.exports=deletehundler;