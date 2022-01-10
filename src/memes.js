import React from "react";
import { render } from "react-dom";
import "./index.css";

function Memes(){
    const myStyle={
        width: "300px",
        height: "200px",
        padding:"20px",
        borderRadius:"15px"
    }
    const memes_list=["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F04%2FLuke-Skywalker-Memes-Featured.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffilmgoblin.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fanh-2.jpg&f=1&nofb=1","https://popcornerreviews.com/wp-content/uploads/2020/08/funny-qui-gon-star-wars-meme.jpg","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawesomedaily.com%2Fwp-content%2Fuploads%2F2016%2F12%2Fstar-wars-memes-4-1.jpg&f=1&nofb=1","https://popcornerreviews.com/wp-content/uploads/2020/08/anakin-star-wars-prequel-meme.jpg"];
    return(
        <div>
            <img alt="just some memes" style={myStyle} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F04%2FLuke-Skywalker-Memes-Featured.jpg&f=1&nofb=1" />
            <img alt="just some memes" style={myStyle} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffilmgoblin.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fanh-2.jpg&f=1&nofb=1" />
            <img alt="just some memes" style={myStyle} src="https://popcornerreviews.com/wp-content/uploads/2020/08/funny-qui-gon-star-wars-meme.jpg" />
            <img alt="just some memes" style={myStyle} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawesomedaily.com%2Fwp-content%2Fuploads%2F2016%2F12%2Fstar-wars-memes-4-1.jpg&f=1&nofb=1" />
            <img alt="just some memes" style={myStyle} src="https://popcornerreviews.com/wp-content/uploads/2020/08/anakin-star-wars-prequel-meme.jpg" />
        </div>
    )
}
export default Memes;