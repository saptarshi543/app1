
import React from 'react';

import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import reactDom from 'react-dom';

// const myCollections=[
//     {
//         label:"img0",
//         img_path:"../public/download.jpeg",
//     },
//     {
//         label: "img1",
//         img_path: "../public/pic1.jpeg",
//     },
//     {
//         label: "img2",
//         img_path: "../public/pic2.jpg",
//     },
//     {
//         label: "img3",
//         img_path: "../public/pic3.jpeg",
//     },
//     {
//         label: "img4",
//         img_path: "../public/pic4.jpg",
//     }
// ];

function Show(){

const MyCollection=[
    {
        label:"img0",
        imgPath:"./download.jpeg",
    },
    {
        label: "img1",
        imgPath: "./pic1.jpeg",
    },
    {
        label: "img2",
        imgPath: "./pic2.jpg",
    },
    {
        label: "img3",
        imgPath: "./pic3.jpeg",
    },
    {
        label: "img4",
        imgPath: "./pic4.jpg",
    }
];

    const CollectionSize=MyCollection.length;
    const theme=useTheme();
    const [index,setActiveStep]=React.useState();
    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

  return (
    <div
      style={{
        marginLeft: "40%",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          flexGrow: 1,
        }}
      >
        <Paper
          square
          elevation={0}
          style={{
            height: 50,
            display: "flex",
            paddingLeft: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
            alignItems: "center",
          }}
        >
          <Typography>{MyCollection[index].label}</Typography>
        </Paper>
        <img
          src={MyCollection[index].imgPath}
          style={{
            height: 255,
            width: "100%",
            maxWidth: 400,
            display: "block",
            overflow: "hidden",
          }}
          alt={MyCollection[index].label}
        />
        <MobileStepper
          variant="text"
          position="static"
          index={index}
          steps={CollectionSize}
          nextButton={
            <Button
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
            >
              Next
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </div>
  );
};
export default Show;