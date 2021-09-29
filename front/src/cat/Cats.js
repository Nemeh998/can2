import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from '@restart/ui/esm/Button'

export class Cats extends Component {
    render() {
        console.log(this.props.catdata.catName)
        return (
            <>
          <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>{this.props.id}</Card.Title>
    <Card.Text>
    {this.props.catdata.catName}
    </Card.Text>
    <Card.Text>
    {this.props.catdata.breed}
    </Card.Text>
    <Button onClick={()=>{this.props.deleteCat(this.props.id)}}>Delete{this.props.id}</Button>
    <Button onClick={()=>{this.props.showModal(this.props.id)}}>Update{this.props.id}</Button>




  </Card.Body>


</Card>


            </>
        )
    }
}

export default Cats
