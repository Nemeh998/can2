import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

export class CatForm extends Component {
    render() {
        return (
            <div>
           <Form onSubmit={this.props.addCats}>

  <Form.Group className="mb-3" controlId="formBasicEmail">

  <Form.Control type="text" name="addcatname" placeholder="Enter cat name" />
    <Form.Control  type="text" name="addbreed" placeholder="Enter cat breed" />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

export default CatForm
