import React from 'react'
import cartDetails from '../context/CartDetails';
import { Flex, Space, Table, Tag } from 'antd';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = React.useContext(cartDetails);
  const data = cartItems.map((item, index) => ({
    key: index,
    name: item.name,
    quantity: item.quantity,
    ticketprice: item.ticketprice,
    totalPrice: (item.ticketprice * item.quantity).toFixed(2),
  }));
  const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Ticket Price',
    dataIndex: 'ticketprice',
    key: 'ticketprice',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  },
];
  return (
    <div className="container">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            <Table columns={columns} dataSource={data} />
          </div>
        )}
    </div>
  )
}

export default Cart;