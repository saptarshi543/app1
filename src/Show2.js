
import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
// const images=[
//   {url: "./download.jpeg"},
//   {url: "./pic1.jpeg"},
//   {url: "./pic2.jpg"},
//   {url: "./pic3.jpeg"},
//   {url: "./pic4.jpg"},
// ];

const images=[
  {url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F04%2FLuke-Skywalker-Memes-Featured.jpg&f=1&nofb=1"},
 { url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffilmgoblin.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fanh-2.jpg&f=1&nofb=1"},
 {url: "https://popcornerreviews.com/wp-content/uploads/2020/08/funny-qui-gon-star-wars-meme.jpg"},
 {url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawesomedaily.com%2Fwp-content%2Fuploads%2F2016%2F12%2Fstar-wars-memes-4-1.jpg&f=1&nofb=1"},
 {url: "https://popcornerreviews.com/wp-content/uploads/2020/08/anakin-star-wars-prequel-meme.jpg"}
];

const myStyle={
  marginLeft:"25%"
};
// const Show=()=>{
//   return(
//     <div>
//     <Box m={2} pt={2}>
//       <SimpleImageSlider 
//       style={myStyle}
//       width={896}
//       height={504}
//       images={images}
//       showBullets={true}
//       showNavs={true} />
      
//     </div>
//   );
// }

const Show=()=>{
  return(
<SimpleImageSlider 
style={myStyle}
width={896}
height={504}
images={images}
showBullets={true}
showNavs={true} 
/>
    );
};

export default Show;