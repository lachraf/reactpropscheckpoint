import React from 'react'
import { Table } from 'react-bootstrap'
import ProductCard from './ProductCard'

const ProductsList = ({list}) => {
  return (
    <div>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>info</th>
      <th>Product Name</th>
      <th>Product Picture</th>
      <th>Product Price</th>
    </tr>
  </thead>
  <tbody>
    {
        React.Children.toArray(list.map(item=><ProductCard data={item}/>))
    }
  </tbody>
</Table>  
    </div>
  )
}

export default ProductsList