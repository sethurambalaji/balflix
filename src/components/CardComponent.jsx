import React, { useState } from 'react';
import { Card,Button, Flex} from 'antd';
const { Meta } = Card;

const CardComponent= (props) => {
  const [prod] = useState(props.prod); 
  return(
  <Card
    hoverable
    style={{ width: 250,height: 500,backgroundColor: 'lightgray', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    cover={
      <img
        draggable={false}
        alt="example"
        src={prod.image}
        style={{ width: 200,height: 300, objectFit: 'fill',alignSelf: 'center',margin:'auto',marginTop:'20px' }}
      />
    }
    className="mb-5 m-auto border-solid border-5 border-300 rounded-lg shadow-lg"
  >
    <Meta title={prod.name} description={`Ticket Price: Rs.${prod.ticketprice}`} className="mb-1 text-center font-bold" />
    <div className="card-body my-2">
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