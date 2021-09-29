import React, { Component } from 'react'

import Modal from 'react-bootstrap/Modal' 
import Button from '@restart/ui/esm/Button'
// import { withAuth0 } from '@auth0/auth0-react';
export class UpdataBookForm extends Component {

    render() {
        // const { user,isAuthenticated } = this.props.auth0;
        return (
          <div>
                <Modal show={this.props.show} onHide={this.props.close} >
  
                      <Modal.Header close>
                          <Modal.Title>updat NEW BOOK</Modal.Title>
                      </Modal.Header>
                      <form onSubmit={this.props.updatebook}>
                      <Modal.Body>
                          <div>
                        
                                  <div className="mb-3">
                                      <label>Book title</label>
                                      <input type="text" name="name" placeholder="Enter book title" />
                                  </div>
  
                                  <div className="mb-3" >
                                      <label>Description</label>
                                      <input type="text" name="description" placeholder="Description" />
                                  </div>
                                  <div className="mb-3" >
                                  <input name='pic'  type="file"placeholder="photo"/>
      
     
                                    
                                  </div>
                             
                                   
                         {/* <FormAdd addNewBook={this.props.addNewBook}/> */}
                         </div>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={this.props.close}>Close</Button>
                          <Button type="submit" variant="primary">Add Book</Button>
                      </Modal.Footer>
                      </form> 
                  </Modal>
              </div>
          )
      }
  }

export default UpdataBookForm
