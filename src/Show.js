import React,{ useState } from "react";

const Show=()=>{

const dataBase=["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F04%2FLuke-Skywalker-Memes-Featured.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffilmgoblin.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fanh-2.jpg&f=1&nofb=1"];

return(

<div>

<img src={dataBase[0]} alt="memes"/>

</div>

  );
}
export default Show;