'use strict';

const ownerModel = require("../Modal/Bookschemah");

 
function deleteBook(req,res){
    // console.log(req.query,'query')
    // console.log(req.body,'body')
let email=req.query.email;
let index=Number(req.params.id);
// console.log(email,index)
ownerModel.find({email:email},(error,emailbook)=>{
    if(error){
        res.send('cant find email')
    }
    else{
    //    console.log(emailbook[0].book,'what com back');
       let newBookArr=emailbook[0].book.filter((book,idx)=>{
           if(idx!==index){
               return book
           }
       })
       console.log(newBookArr)
    //    console.log(emailbook[0].book,'after delete');
    emailbook[0].book=newBookArr
       emailbook[0].save()
       res.send(emailbook[0].book)
       
    }
})
}
module.exports=deleteBook;