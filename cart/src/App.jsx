import { useState } from 'react'
import './App.css'
import {Mycontext} from './Context'
import Cart from './Cart'
import Header from './Header'
import ProductList from './ProductList'

function App() {
 const [products,setProducts]=useState([
  {
    _id: "1",
    name: "iPhone 9",
    image:
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",

    price: 549,
   
  },
  {
      _id: "2",
      name: "iPhone X",
      image:
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  
       price: 899,
    
    },
    {
      _id: "3",
      name: "OPPOF19",
      image:
        "https://i.dummyjson.com/data/products/3/1.jpg",
  
      price: 280,
     
    },
    {
      _id: "4",
      name: "Huawei P30",
      image:
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      price: 499,
     
    },
    {
      _id: "5",
      name: "Huawei P30",
      image:
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      price: 499,
     
    },
    {
      _id: "6",
      name: "iPhone",
      image:
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  
      price: 929.99,
     
    },


 ])
 const [cart,setCart]=useState([]);
 const[showcart,setShowcart]=useState(false);
 console.log(cart);
 
 const AddTocart= (data)=>{
 console.log(data);
 setCart([...cart,{...data,quantity: 1}])
 }
 
 const handleShow = (value) => {
   setShowcart(value)
 }
 
  return (
    <div>
      <Mycontext.Provider value={{products,AddTocart,handleShow,cart,showcart,setCart}}>
        <Header/>
        {
       showcart?  <Cart/>: <ProductList/>
    }
       
      </Mycontext.Provider>
    </div>
  )
}

export default App
