'use strict';

const myOwnerModel = require("../Modal/cat");

function updatecat(req,res){
let { ownerName,name,breed}=req.body
let index=Number(req.params.catId);
console.log({ ownerName,name,breed})
myOwnerModel.findOne({name:ownerName},(error,datacat)=>{
if(error){
    res.send('somthing wrong in data')
}else{

    console.log(datacat)
    //index واضف بدالو الي جوة {} برقم هاظ احذف ||1|
    // العنصر, احذف منو واحد ,{واضف بدالو لجد]}د
    datacat.cats.splice(index,1,{
        catName: name,
        breed: breed,
    })
    datacat.save();
   
    res.send(datacat.cats)

}



})
}
module.exports=updatecat;
