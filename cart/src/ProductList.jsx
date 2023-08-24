import React from 'react'
import './ProductsList.css'
import { useContext } from 'react'
import {Mycontext} from './Context'

function ProductList() {
    const{products}=useContext(Mycontext)
    const{AddTocart}=useContext(Mycontext)
  return (
    <div>
         <div className="p1">
        {
            products.map((productItem,Productindex)=>{
                   return(
                    <div  className="b1" style={{width:'50%'}} >
                        <div className='product-item'>
                        
                         <img src={productItem.image} width="50%"></img>
                       <p>{productItem.name}</p>
                         <p>RS{productItem.price}/-</p>
                         <button onClick={()=>AddTocart(productItem)}>Add to Cart</button>
                           </div>
                    </div>
                   )
            })
        }
    </div>
        </div>
  )
}

export default ProductList