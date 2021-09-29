'use strict';
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/book',
{ useNewUrlParser: true, useUnifiedTopology: true });

const Bookscema=new mongoose.Schema({
    bookname:String,
    description:String,
    picture :String,
    
})
const ownerbook =new mongoose.Schema({
    email:String,
    book:[Bookscema]
})
 const bookModel=mongoose.model('book',Bookscema);
 const  ownerModel=mongoose.model('ownerbook',ownerbook);
 
module.exports=ownerModel;
