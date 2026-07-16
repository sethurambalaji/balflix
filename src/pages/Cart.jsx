import React from 'react'
import cartDetails from '../context/CartDetails';
import { Flex, Space, Table, Tag } from 'antd';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = React.useContext(cartDetails);
  const data = cartItems.map((item, index) => ({
    key: index,
    name: item.name,
  }));
  const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    }
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