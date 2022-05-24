import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTothali} from "../redux/slice";
const Product = ({data}) => {
  const [quantity,setQuantity]=useState(1);

const dispatch=useDispatch();
const add=(item)=>{
  item = JSON.parse(JSON.stringify(item));
  item.quantity=quantity;
  item.totalPrice=Number(item.quantity)*Number(item.price)
  dispatch(addTothali(item));
console.log(addTothali(item))
}

const increment=()=>{
  setQuantity(quantity+1)

}

const decrement=()=>{
  if(quantity>1)
  {
    setQuantity(quantity-1)
  }
}

  return (
<div className='col-4 mt-3'>
          <div className='card'>
 <li className="meal">
 <img width="400px" height="300px" src={data.image} className="card-img-top" alt="..."/>
  
  <div>
    <h3>{data.name}</h3>
    <h4>{data.description}</h4>
    <div className="price">$ {data.price}</div>
    </div>

    <div className="cart">
       <button className="cartbtn" onClick={() => add(data)}>Add</button><br></br>
       <br></br>

         <span>
         <button type="button" className="decbtn" 
          onClick={decrement} >
          <span className="glyphicon glyphicon-minus">-</span>
        </button>
        </span>
        <input type="text" id="quantity" name="quantity" className="qtyinput"
         value={quantity} min="1" max="100"/>
         <span>
           <button type="button" className="incbtn" 
           onClick={increment}>
          <span className="glyphicon glyphicon-plus">+</span>
          </button>
          </span>
          
                  </div>
              </li>

  </div>
  </div>


    
  )
}

export default Product