import React from 'react'
import Hello from './Hello'
import Greet from './Greet'
import Message from './Message'
import Counter from './Counter'
import ProductList from './ProductList'
import DataFetch from './DataFetch'

const Home = () => {
  const products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
    { id: 3, name: 'Product C', price: 300 },
  ];
  
  return (
    <div>
      {/* <DataFetch/> */}
      {/* <DataFetch/> */}
      {/* <ProductList/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
        {/* <Hello name='Everyone'/>
        <Greet name='Everyone'/> */}
    </div>
  )
}

export default Home