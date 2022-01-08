import react from "react";
import { render } from "react-dom";
import {Frame , Page} from "framer";
import "./index.css";
export function Memes(){
    const pages=[
        {
            index:1,
            src:"/media/sap543/6532a2f3-f1fe-4031-8698-9c8cfa090c60/reactsProjects/app1/src/download.jpeg",
            background: "#1e1e1e"
        },
        {
            index:2,
            src:"/media/sap543/6532a2f3-f1fe-4031-8698-9c8cfa090c60/reactsProjects/app1/src/pic1.jpeg",
            background:"#fcfcfc"
        },
        {
            index:3,
            src:"/media/sap543/6532a2f3-f1fe-4031-8698-9c8cfa090c60/reactsProjects/app1/src/pic3.jpeg",
            background:"#fcfcfc"
        },
        {
            index:4,
            src:"/media/sap543/6532a2f3-f1fe-4031-8698-9c8cfa090c60/reactsProjects/app1/src/pic4.jpg",
            background:"#fcfcfc"
        }
         ]

         return(
             <Page
             defaultEffect="none"
      width={350}
      height={350}
      contentWidth="auto"
      alignment="end"
      radius={30}
             >
                 {pages.map((page) => (
        // Framer "Frame" component
        <Frame
          width={350}
          height={350}
          radius={30}
          background={page.background}
        >
          <img src={page.src} alt="geeksforgeeks" />
        </Frame>
      ))}
             </Page>
         )
}