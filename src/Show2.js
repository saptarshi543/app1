
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
  {url:"https://popcornerreviews.com/wp-content/uploads/2020/08/funny-qui-gon-star-wars-meme.jpg"},
 { url:"https://popcornerreviews.com/wp-content/uploads/2020/08/anakin-star-wars-prequel-meme.jpg"},
];
const myStyle={
  marginLeft:"25%"
};
const Show=()=>{
  return(
    <div>
      <SimpleImageSlider 
      style={myStyle}
      width={896}
      height={504}
      images={images}
      showBullets={true}
      showNavs={true} />
    </div>
  );
}
export default Show;