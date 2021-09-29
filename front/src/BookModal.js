import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal' 
import Button from '@restart/ui/esm/Button'
// import Form from 'react-bootstrap/Form'
// import {Col,Row}from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';

export class BookModal extends Component {
  addNewBook=(event)=>{
    event.preventDefault();
    let bookInfo = {
      name:event.target.title.value,
      description:event.target.description.value,
      status:event.target.status.value, 
      email:this.props.auth0.user.email
    }
    console.log(bookInfo,this.props.auth0.user.email)  
    
    this.props.getModalData(bookInfo)
    
  }
  render() {
      const { user,isAuthenticated } = this.props.auth0;
      return (
        <div>
              <Modal show={this.props.show} onHide={this.props.close} >

                    <Modal.Header closeButton>
                        <Modal.Title>ADD NEW BOOK</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.addNewBook}>
                    <Modal.Body>
                        <div>
                      
                                <div className="mb-3">
                                    <label>Book title</label>
                                    <input type="text" name="title" placeholder="Enter book title" />
                                </div>

                                <div className="mb-3" >
                                    <label>Description</label>
                                    <input type="text" name="description" placeholder="Description" />
                                </div>
                                <div className="mb-3" >
                                <input name='status'  type="file"placeholder="photo"/>
    
   
                                  
                                </div>
                           
                                 
                       {/* <FormAdd addNewBook={this.props.addNewBook}/> */}
                       </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                        <Button type="submit" variant="primary">Add Book</Button>
                    </Modal.Footer>
                    </form> 
                </Modal>
            </div>
        )
    }
}

export default withAuth0(BookModal)
