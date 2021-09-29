import axios from 'axios';
import React, { Component } from 'react'
import Cats from './Cats';
import   FormCat from './FormCat';
import AddCatForm from './AddCatForm'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap'
import UpdateCatForm from './UpdateCatForm';

export class Appcat extends Component {
    constructor(props){
        super(props);
        this.state={
            cats:[],
            showCatsComponent:false,
            ownerName:'',
            showrupdate:false,
            index:0,
            breed:'',
            catName:'',
            showupdate:false,
       name:'',
       breed:'',
        
    
        }
    }
    getCat=async(event)=>{
        event.preventDefault();
        // try{
            
            await this.setState({
                ownerName:event.target.name.value
            })
            console.log(this.state.ownerName,'ownerName')
            
            const url=`http://localhost:4001/cat?onername=${this.state.ownerName}`;
            const cats =await axios.get(url)
            console.log(cats.data[0].cats.catname,'url')
            this.setState({
                
                cats:cats.data[0].cats,
                showCatsComponent:true,
                
                
            })
            console.log(cats.data)
            console.log(this.state.cats,'cats Array')
            
            console.log(this.state.cats[0],'state cats')
            
            
        }
        // catch(error){
            //     console.log(error);
            // }
            // }
            
            //http://localhost:4001/deletecat/1?ownerName=nemh`;
            deleteCat=async(id)=>{
                console.log(id)
                let deleteObj={
                    ownerName:this.state.ownerName
                    
                }
                let deleteCat= axios.delete(`http://localhost:4001/deletecat/${id}`,{params:deleteObj})
                console.log(deleteCat.data,'deleteCat')
                await this.setState({
                    cats:deleteCat.data,
                })
            }
            addCats=async(event)=>{
                event.preventDefault();
                const addcatname=event.target.addcatname.value;
                const addbreed=event.target.addbreed.value;
                const owneName=this.state.ownerName;
                
                const addcat={
                    addcatname:event.target.addcatname.value,
                    addbreed:event.target.addbreed.value,
                    owneName:this.state.ownerName,
                }
                console.log(addcatname,addbreed,owneName);
                let addcatdata=await axios.post(`http://localhost:4001/addcat`,addcat)
                console.log(addcatdata,'addcat data')
                
                await this.setState({
                    cats:addcatdata.data,
                })
            }
            
   



closeModal=()=>{
    this.setState({
      showupdate:false,   
  })
  console.log(this.state.showupdate,'closeModal')
}
showModal=async(idx)=>{
    console.log(idx,'idx form')
    await this.setState({
        index:idx,
        showupdate:true,
        catName:this.state.cats[this.state.index].catName,
        breed:this.state.cats[this.state.index].breed,
    })
  console.log(this.state.catName,'catName')
  console.log(this.state.index,'index')
  console.log(this.state.breed,'breed')
  console.log(this.state.cats,'breed')

  }
  getdatacat=async(event)=>{
    event.preventDefault();
    await this.setState({
        name:event.target.name.value,
        breed:event.target.breed.value

    })
    let updateobj= {
        ownerName:this.state.ownerName,
        name:this.state.name,
        breed:this.state.breed,

    }
    console.log(updateobj,"update data");
    let updatecatdata=await axios.put(`http://localhost:4001/updatacat/${this.state.index}`,updateobj)
    
    await this.setState({
        cats:updatecatdata.data,
    })
    console.log(this.state.cats," cats update data");
}
render() {
    return (
        <>
        
    <FormCat
    getCats={this.getCat}/>

    <AddCatForm
    
    addCats={this.addCats}
    />

<Row md={3} className="justify-content-md-center">
  {this.state.showCatsComponent &&
             this.state.cats.map((cat,id)=>{
                   console.log(cat.catName,'cat loop',id)
        return(
            <Col  xs={3} md={4}>

                <Cats

                id={id}
catdata={cat}
deleteCat={this.deleteCat}
showModal={this.showModal}
/>
               
{this.state.showupdate&&
              <UpdateCatForm
              show={this.state.showupdate}
            //   closeModal={this.closeModal}
              catName={this.state.catName}
              breed={this.state.breed}
            //   index={this.props.id}
  
         closeModal={this.closeModal}
         showModal={this.showModal}
         getdatacat={this.getdatacat}
/>
}



                </Col>
                )
        
            })} 
              </Row> 

            </>
            
        )
    }
}

export default Appcat
