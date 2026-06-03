import React from 'react';
import { Card,Button, Flex} from 'antd';
const { Meta } = Card;

const prod =   {
    "_id": "65d73c78961e2c850d8b9434",
    "id": 1,
    "name": " The Incredibles",
    "title": "Incredible",
    "releasedate": "17 December 2004",
    "director": "Brad Bird",
    "budget": "20.7 crores USD (2004)",
    "ticketprice": 250,
    "image": "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Last_Airbender_Poster.png",
    "description": "The Incredibles is a 2004 American computer-animated superhero film produced by Pixar Animation Studios and released by Walt Disney Pictures. Written and directed by Brad Bird, it stars the voices of Craig T. Nelson, Holly Hunter, Sarah Vowell, Spencer Fox, Jason Lee, Samuel L. Jackson, and Elizabeth . Set in a retro-futuristic version of the 1960s,[5][6][7] the film follows Bob and Helen Parr, a couple of superheroes, known as Mr. Incredible and Elastigirl, respectively, who hide their powers in accordance with a government mandate, and attempt to live a quiet suburban life with their three children.",
    "createdAt": "2024-02-22T12:22:16.431Z",
    "updatedAt": "2024-03-19T06:54:39.277Z",
    "__v": 0
  }
const CardComponent= () => { 
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