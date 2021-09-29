import React, { Component } from 'react'

import { withAuth0 } from '@auth0/auth0-react';
import Cardbook from './Cardbook';
import axios from 'axios';
// import Button from '@restart/ui/esm/Button';
import BookModal from './BookModal';
import Button from 'react-bootstrap/Button'
import UpdataBookForm from './cat/UpdataBookForm';
export class MyFav extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookdata:[],
            show:false,
            showupdataform:false,
            index:'',
            email:this.props.auth0.user.email,
            name:'',
            description:'',
            pic:'',
        }
    }
    componentDidMount=()=>{ 
        this.getbookadata();
     }

    getbookadata=async()=>{

        const email=this.props.auth0.user.email;
        // console.log(email)
  const url=`http://localhost:4001/bookdata?email${email}`;
  const book=await axios.get(url);
  console.log(book,"url");
  this.setState({
    bookdata:book.data[0].book
  })
console.log(this.state.bookdata,'book.data')
    }
    closeModal=()=>{
        this.setState({
            show:false,
        })
    }
    showModal=()=>{
       this.setState({
           show:true,
       }) 
    }
    getModalData=async(data)=>{
    

        let addcatdata=await axios.post(`http://localhost:4001/addbook`,data)
        console.log(addcatdata,'addcatdata')
       await this.setState
        ({
            bookdata:addcatdata.data[0].book
        })
    }
    deleteBook=async(id)=>{
console.log(id,'id')
// let deleteObj= await{
//   email:
// }
// console.log(deleteObj)
let deleteBook= axios.delete(`http://localhost:4001/deleteBook/${id}?email=${this.props.auth0.user.email}`)
console.log(deleteBook)
await this.setState({

    bookdata:deleteBook.data[0].book,
})
    }
// showmodal=()=>{

// }



showupdata=(idx)=>{
    this.setState({

        index:idx,
        showupdataform:true,
    })
// let objdata={

// }
// console.log(objdata)
    }
    closeModal=()=>{
        this.setState({
            showupdataform:false,
        })
    }
    updatebook=async(event)=>{
      
        event.preventDefault();
        await this.setState({ 
             name:event.target.name.value,
            description:event.target.description.value,
            pic:event.target.pic.value, 
        })
console.log(this.state.name,this.state.description,this.state.pic)



let updataobj={
   
    name:this.state.name,
    description:this.state.description,
    pic:this.state.pic,
    email:this.state.email,
}
console.log(updataobj,'bookdata');
let updateBook= axios.put(`http://localhost:4001/updateBook/${this.state.index}`,updataobj);
console.log(updateBook,'bookdata');

this.setState({
    bookdata:updateBook.data

})

    }
    render() {
        // const { user,isAuthenticated } = this.props.auth0;
        return (
            <>
               <h1>My fav</h1> 
             
               <Button variant="primary" size="lg" onClick={this.showModal}>
                   ADD  BOOk
             </Button>
               
               <BookModal
               close={this.closeModal}
               show={this.state.show}
               getModalData={this.getModalData}/>
       
           {
               this.state.bookdata.map((book,id)=>{
                //    console.log(book[0].bookname,'nnnnnnnn')
                   console.log(book,'data')
                   return(

<Cardbook
data={book}
id={id}
deleteBook={this.deleteBook}
showupdata={this.showupdata}
/>

                   )
            
               })}
                   


                   
                   {this.state.showupdataform&&

           
<UpdataBookForm 
 close={this.closeModal}
show={this.state.showupdataform}
showupdata={this.showupdata}
updatebook={this.updatebook}
/>
    }

            </>
        )
    }
}

export default withAuth0(MyFav)
