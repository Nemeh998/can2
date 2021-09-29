'use strict';

const ownerModel = require("../Modal/Bookschemah");

function addBook(req,res){
console.log(req.body)
let { name,description,status,email }=req.body


ownerModel.find({email:email},(error,emailbook)=>{
    if(error){
        res.send('cant find email')
    }
    else{
        console.log(emailbook,'befor save Data')
        emailbook[0].book.push({
            bookname:name,
            description:description,
            picture :status,
        })
        emailbook[0].save();
        res.send(emailbook[0].book)
        console.log(emailbook,'befor save Data')
    }
})}
module.exports=addBook;