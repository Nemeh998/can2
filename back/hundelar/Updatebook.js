'use strict';

const ownerModel = require("../Modal/Bookschemah");

function updatebook(req,res){

    console.log(req.body);
    console.log(req.params)
    let { name,
    description,
    pic ,email}=req.body
let index=Number(req.params.index)

ownerModel.findOne({email:email},(error,ownerdata)=>{
    if(error){
        res.send(error)
    }
    else{
ownerdata.book.splice(index,1,{
    bookname:name,
    description:description,
    picture :pic,
})
ownerdata.save();
res.send(ownerdata.book)
console.log(ownerdata.book)
    }
})
}

module.exports=updatebook;