import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
export class FormCat extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.getCats}>
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="text" name="name" placeholder="Enter name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Group>
</Form>
            </div>
        )
    }
}

export default FormCat
