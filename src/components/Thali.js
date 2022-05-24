import React from 'react';
 import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Thali() {

  const productData=useSelector(state=>state.counter.products)

    return (
    <div className="Menu">
      <h1 className ="Villa">Villa Special</h1>
    <div> 

      {
        productData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Thali;