import React from "react";
import { Row } from "react-bootstrap";
import myImg from "../../Assets/linkedin.png";

const iframeStyle ={

  overflow:"none"
}
function Github() {
  return (
    <Row style={{ justifyContent: "center"}}>
      
      <a href="https://www.linkedin.com/in/arbaz-khan-40b490228/" target="_blank"> <object data={myImg} style={{width:"100%",filter:"drop-shadow(.22rem .35rem .35rem  white)", borderRadius:"10px"}} ></object></a>
     
    </Row>
  );
}

export default Github;
