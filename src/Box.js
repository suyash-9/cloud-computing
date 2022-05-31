import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link,NavLink,NavLinkProps } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


export const Box = (props) => {

  const redirectbutton = (link) =>{
    window.open(link);
  }

  return (
    <Card className="CardGroup" bg='light'>
    <Card.Img className="cardimg" variant="top" src={props.img} style={{backgroundColor: 'grey',height:120,borderRadius:10,width:140,margin:'auto' }}></Card.Img>
    {/* <Card.Header></Card.Header> */}
    <Card.Body>
      <Card.Title className="cardtitle" >{props.heading}</Card.Title>
      <Card.Text className="cardtitle">
        {props.content}
      </Card.Text>
      <a href={props.link}><Button className="button" type="button" variant="primary"  onClick={redirectbutton(props.link)}>Visit Portfolio</Button></a>
      
    </Card.Body>
  </Card>
  
  );
}

export default Box;
