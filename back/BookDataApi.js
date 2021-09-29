const axios = require('axios');
function bookApi (req,res){
const url='https://www.googleapis.com/books/v1/volumes?q=search+terms'
const data=axios.get(url)
console.log(data)
}

module.exports=bookApi;