
import React from 'react';
import test_image from './download.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

// import image0 from './download.jpeg';
// import image1 from './pic1.jpeg';
// import image2 from './pic2.jpg';
// import image3 from './pic3.jpeg';
// import image4 from './pic4.jpg';

// const images=[
//   {url: "./download.jpeg"},
//   {url: "./pic1.jpeg"},
//   {url: "./pic2.jpg"},
//   {url: "./pic3.jpeg"},
//   {url: "./pic4.jpg"},
// ];

// const images=[
//   {url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F04%2FLuke-Skywalker-Memes-Featured.jpg&f=1&nofb=1"},
//  { url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffilmgoblin.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fanh-2.jpg&f=1&nofb=1"},
//  {url: "https://popcornerreviews.com/wp-content/uploads/2020/08/funny-qui-gon-star-wars-meme.jpg"},
//  {url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawesomedaily.com%2Fwp-content%2Fuploads%2F2016%2F12%2Fstar-wars-memes-4-1.jpg&f=1&nofb=1"},
//  {url: "https://popcornerreviews.com/wp-content/uploads/2020/08/anakin-star-wars-prequel-meme.jpg"}
// ];

// const myStyle={
//   imgs:{
//     padding:"10%",
//   }
// };

const Show=()=>{
  return(
    <div>
      <img scr={test_image} alt="just some memes"  />
    </div>
    );
};

export default Show;