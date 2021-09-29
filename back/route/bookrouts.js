const bookModel=require('../Modal/Bookschemah')
// http://localhost:4001/cat?email=
function bookdata(req,res){

    const {email}=req.query;
   bookModel.find({owner:email},function(error,bookdata){
if(error){res.send(error)
}
else{
    res.send(bookdata)
console.log(bookdata)
}


   })

}
module.exports=bookdata;