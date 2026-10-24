import React from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const {id}=useParams();
  return (
    <div>
      <h1>ProductDetails</h1>
      <h2>Product Id: {id}</h2>
      </div>
  )
}

export default ProductDetails;