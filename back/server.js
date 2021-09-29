'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const cathundler=require('./hundelar/cathundler')
// const addCat=require('./hundelar/addCat')
// const deletehundler=require('./hundelar/deletehundler')
// const updatecat=require('./hundelar/updatecat')
// const bookApi=require('./BookDataApi')
const Bookschemah=require('./Modal/Bookschemah');
const bookdata=require('./route/bookrouts')
const addBook=require('./hundelar/AddBook')
const deleteBook=require('./hundelar/deleteBook')
const updatebook=require('./hundelar/Updatebook')
const app = express();
app.use(cors());
//Middle: checkpoint to parse 
app.use(express.json());
//

const PORT = process.env.PORT;
///////////////////////hundler///////////////////////

// app.get ('/cat',cathundler)

// app.post('/addcat',addCat)
// // http://localhost:4001/1?ownerName=nemh
// //هاي : عشان يتغير ويصير  1 و 2 وهيك
// app.delete('/deletecat/:catId',deletehundler)

// app.put('/updatacat/:catId',updatecat)
///////////////////////bookhundler///////////////////////

// http://localhost:4001/bookdata?email=nemh
app.get('/bookdata',bookdata);

app.post('/addbook',addBook)

// http://localhost:4001/1?email=98nemh@gmail.com
app.delete('/deleteBook/:id',deleteBook)

// app.get('/bookApi',bookApi)
app.put('/updateBook/:bookId',updatebook)
////////////SeedSchemah//////////////////


function seedbook (){
    const owner=new Bookschemah({
       email:'98nemh@gmail.com',
       book: [
           {
            bookname:'cook',
            description:'cookcook',
            picture :'cookimg',
           
           }
       ]
    })
    // console.log(owner)
    owner.save();
    
}

// seedbook();
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})