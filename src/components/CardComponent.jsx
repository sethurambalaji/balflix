import cartDetails from '../context/CartDetails';
import React, { useState } from 'react';
import { Card,Button, Flex} from 'antd';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;


const CardComponent= (props) => {
  const [prod] = useState(props.prod); 
  const { addToCart } = React.useContext(cartDetails);
  return(
  <NavLink to={`/product/${prod._id}`} style={{ textDecoration: 'none' }} state={{ product: prod }}>
  <Card
    hoverable
    style={{ width: 210,height: 370,background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly',backdropFilter: 'blur(25px)',borderRadius: '8px',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
    cover={
      <img
        draggable={false}
        alt="example"
        src={prod.image}
        style={{ width: 150,height: 200, objectFit: 'fill',justifySelf: 'anchor-center',margin:'0',borderRadius: '8px' }}
      />
    }
    className="m-auto border-solid border-5 border-300 rounded-lg shadow-lg"
  >
    
      <div className="card-body ">
        <Flex vertical gap="small" style={{ width: '100%'}}>

          {/* <Meta title={prod.name} description={`Ticket Price: Rs.${prod.ticketprice}`} className="mb-1 text-center font-bold" /> */}
          <h6 className="text-white text-center text-lg font-bold">{prod.name}</h6>
          <h6 className="text-white text-center text-lg font-bold">Price: Rs.{prod.ticketprice}</h6>
                 
          {/* <NavLink to="/cart" style={{ textDecoration: 'none' }}> */}
            <Button type="primary" block onClick={(e) => { e.preventDefault(); addToCart(prod); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </Button>
          {/* </NavLink> */}
        </Flex>
      </div>
  </Card>
  </NavLink>
)
};
export default CardComponent;