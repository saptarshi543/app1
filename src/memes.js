import React from "react";
import { Component } from "react/cjs/react.production.min";
import { render } from "react-dom";
import "./index.css";

class Memes extends React.Component{
    render(){
        const mystyle={
            width: "300px",
            height:"200px"
    };
	    {/*error in exporting ....*/}
        return(
            <div>
                 <img style={mystyle} alt="just some memes" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F04%2FLuke-Skywalker-Memes-Featured.jpg&f=1&nofb=1" />

            </div>
        )
    }
}
export default Memes;
