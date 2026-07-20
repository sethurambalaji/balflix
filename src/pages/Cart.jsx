import React from 'react'
import cartDetails from '../context/CartDetails';
import Navbar from '../components/common/Navbar';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = React.useContext(cartDetails);
  
  const data = cartItems.map((item, index) => ({
    key: index,
    name: item.name,
    quantity: item.quantity,
    ticketprice: item.ticketprice,
    totalPrice: (item.ticketprice * item.quantity).toFixed(2),
    image: item.image,
  }));
  const [totalPrice, setTotalPrice] = React.useState(data.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0).toFixed(2));
  
  const onQuantityChange = (item, newQuantity) => {
    let index = data.findIndex((i) => i.key === item.key);   
    data[index].quantity = newQuantity;
    data[index].totalPrice = (item.ticketprice * newQuantity).toFixed(2)

    setTotalPrice(data.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0).toFixed(2));
  }

  return (
    <div className="containerFluid">
        <Navbar />
        <div>
        <h1 style={{justifySelf:'center'}}>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center" style={{justifySelf:'center'}}>Your cart is empty.</p>
        ) : (
          <div className=" overflow-x-auto p-4" style={{justifySelf:'center'}}>
            <table className="table-auto w-full border-collapse border border-gray-300">
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
                      
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '48px', height: '80px', objectFit: 'cover', marginRight: '10px' }}
                        />
                      <span>{item.name}</span>
                      
                    </td>                    
                    <td className="border border-gray-300 px-4 py-2">${item.ticketprice}</td>
                    <td className="border border-gray-300 px-4 py-2">                      
                        <select class="form-select" aria-label="select example" onChange={(e) => onQuantityChange(item, parseInt(e.target.value))}>
                          <option selected>{item.quantity}</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">${item.totalPrice}</td>
                  </tr>
                ))}
                  <tr>
                    <td colSpan="3" className="border border-gray-300 px-4 py-2 text-right font-bold">Total:</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">${totalPrice}</td>
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