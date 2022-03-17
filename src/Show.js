import React from "react";
// import ReactDOM from "react-dom";

var listOfImages=[]
  const myStyle_horizontal={
    width:"315px",
    height:"250px",
    padding:"20px",
    borderRadius:"15px"
  }
class Show extends React.Component{

  importAll(r){
    return r.keys().map(r);
  }
  componentWillMount(){
    listOfImages=this.importAll(require.context('./data/', false, /\.(png|jpe?g|svg)$/));    
  }
  render(){
    return(
      <div>
      {
        listOfImages.map((image,index)=> <img key={index} src={image} loading="lazy" style={myStyle_horizontal} alt="info"></img> )
      }
      </div>
      )
  }
}
export default Show;
