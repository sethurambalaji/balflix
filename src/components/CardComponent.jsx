import React, { useState } from 'react';
import { Card,Button, Flex} from 'antd';
const { Meta } = Card;

const CardComponent= (props) => {
  const [prod, setProd] = useState(props.prod); 
  return(
  <Card
    hoverable
    style={{ width: 300,height: 400 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src={prod.image}
        style={{ width: 300,height: 200, objectFit: 'cover',alignSelf: 'center' }}
      />
    }
    className="m-auto border-solid border-2 border-gray-300 rounded-lg shadow-lg"
  >
    <Meta title={prod.name} description={`Ticket Price: Rs.${prod.ticketprice}`} className="mb-1 text-center font-bold" />
    <div className="card-body">
        <Flex vertical gap="small" style={{ width: '100%' }}>
    
    <Button type="primary" block>
      View Details
    </Button>
    <Button danger>Add to Cart</Button>
    </Flex>
  </div>
  </Card>
)
};
export default CardComponent;