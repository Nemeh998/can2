import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from '@restart/ui/esm/Button'
export class Cardbook extends Component {
    render() {
      console.log(this.props.data.bookname,'props')
        return (
            <div>
                 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.data.bookname} alt={this.props.data.picture} />
   <Card.Body>
     <Card.Title>bookname:{this.props.data.description}</Card.Title>
    <Card.Text>
    description:
      {this.props.data.description}
    </Card.Text>
    
   <Card.Text>
     </Card.Text>
     <Button onClick={()=>{this.props.deleteBook(this.props.id)}}>Delete{this.props.id}</Button>  
        <Button onClick={()=>{this.props.showupdata(this.props.id)}}>updata{this.props.id}</Button>
   </Card.Body>
</Card>
            </div>
        )
    }
}

export default Cardbook
