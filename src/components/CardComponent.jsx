import React, { useState } from 'react';
import { Card,Button, Flex} from 'antd';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

const CardComponent= (props) => {
  const [prod] = useState(props.prod); 
  return(
  <NavLink to={`/product/${prod._id}`} style={{ textDecoration: 'none' }} state={{ product: prod }}>
  <Card
    hoverable
    style={{ width: 210,height: 400,background: 'linear-gradient(to bottom, #FFD400, #FFC300,#FF8C00,#FF5F00)', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}
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
                 
          <NavLink to="/cart" style={{ textDecoration: 'none' }}>
            <Button type="primary" block>
              Add to Cart
            </Button>
          </NavLink>
        </Flex>
      </div>
  </Card>
  </NavLink>
)
};
export default CardComponent;