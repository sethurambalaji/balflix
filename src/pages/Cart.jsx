import React from 'react'
import {useContext,useState} from 'react';
import cartDetails from '../context/CartDetails';
import BackgroundColor from '../context/Style';
import Navbar from '../components/common/Navbar';
import { NavLink } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

const Cart = () => {
  const { cartItems,setCartItems} = useContext(cartDetails);

  const { backgroundImages } = React.useContext(BackgroundColor);
  
  const [data, setData] = useState(cartItems.map((item, index) => ({
    key: index,
    name: item.name,
    _id:item._id,
    quantity: item.quantity,
    ticketprice: item.ticketprice,
    totalPrice: (item.ticketprice * item.quantity).toFixed(2),
    image: item.image,
  })));
  const [totalPrice, setTotalPrice] = React.useState(data.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0).toFixed(2));
  
  const onQuantityChange = (item, newQuantity) => {
    let index = data.findIndex((i) => i.key === item.key);   
    data[index].quantity = newQuantity;
    data[index].totalPrice = (item.ticketprice * newQuantity).toFixed(2)

    setData([...data]);
    setTotalPrice(data.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0).toFixed(2));

    setCartItems(data);
  }

  const removeFromCart = (item) =>{
      console.log("items in cart:"+cartItems);
      let index = cartItems.findIndex((i) => i._id===item._id );
      cartItems.splice(index,1);
      setCartItems(cartItems);

      console.log("items removed in cart:"+cartItems);

      console.log("items in cart data:"+data);
      index = data.findIndex((i) => i._id===item._id );
      data.splice(index,1);

      setData(data);
      console.log("items in cart data:"+data);
  }

  return (
    <div className="containerFluid">
        <Navbar />
        <div style={{background:backgroundImages, minHeight:'100vh'}}>
        <h1 style={{justifySelf:'center'}}>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center" style={{justifySelf:'center'}}>Your cart is empty.</p>
        ) : (
          <div className=" overflow-x-auto p-4" style={{justifySelf:'center'}}>
            <table className="table-auto w-full border-collapse border border-5 rounded-3 border-black bg-white">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Product</th>                  
                  <th className="border border-gray-300 px-4 py-2">Ticket Price</th>
                  <th className="border border-gray-300 px-4 py-2">Quantity</th>
                  <th className="border border-gray-300 px-4 py-2">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.key}>

                    <td className="border border-gray-300 px-4 py-2">
                      <NavLink to={`/product/${item._id}`} style={{ color:'black' ,textDecoration: 'underlined' }} state={{ product: item }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '48px', height: '80px', objectFit: 'cover', marginRight: '10px' }}
                        />
                        <span>{item.name}</span>
                      </NavLink>
                    </td>                    
                    <td className="border border-gray-300 px-4 py-2">${item.ticketprice}</td>
                    <td className="border border-gray-300 px-4 py-2"> 
                        <div className='d-flex flex-row p-1'>                     
                        <select class="form-select" aria-label="select example" onChange={(e) => onQuantityChange(item, parseInt(e.target.value))}>
                          <option selected className='bg-secondary'>{item.quantity}</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                       
                          <DeleteOutlined className='p-1' onClick={() => removeFromCart(item)}/>
                        
                        </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">${item.totalPrice}</td>
                  </tr>
                ))}
                  <tr>
                    <td colSpan="3" className="border border-  px-4 py-2 text-right font-bold">Total:</td>
                    <td className="border border-gray-300 px-4 py-2" style={{fontWeight:'bolder'}}>${totalPrice}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        )}
        </div>
    </div>
  )
}

export default Cart;