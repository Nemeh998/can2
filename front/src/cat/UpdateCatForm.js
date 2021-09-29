import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal' 
import Button from '@restart/ui/esm/Button'
export class UpdateCatForm extends Component {
    
   

    render() {
          console.log(this.props.show,'show')
     
          return (
     
            <div>
                  <Modal show={this.props.show} onHide={this.props.closeModal} >
    
                        <Modal.Header closeButton>
                            <Modal.Title>updata cat</Modal.Title>
                        </Modal.Header>
                        <form onSubmit={this.props.getdatacat}>
                        <Modal.Body>
                            <div>
                          
                                    <div className="mb-3">
                                        <p>{this.props.catName}</p>
                                        <p>{this.props.index}</p>
                                        <label>cat namr</label>
                                        <input type="text" name="name" placeholder="Enter book title" defaultvalue={ this.props.catName}/>
                                    </div>
                                    <p> {this.props.breed}</p>
                                    <div className="mb-3" >
                                        <label>cat breed</label>
                                        <input type="text" name="breed" placeholder="Description" defaultvalue ={ this.props.breed} />
                                    </div>
                                    
                                     
                       
                           </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
                            <Button type="submit" variant="primary">Update</Button>
                        </Modal.Footer>
                        </form> 
                    </Modal>
                </div>
            )
        }
    }

export default UpdateCatForm
