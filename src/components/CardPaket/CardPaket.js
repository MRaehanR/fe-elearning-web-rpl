import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardPaket.css";

function CardPaket(props) {
  return (
    <Card className="card-paket-container text-center">
      <Card.Header className="text-center card-paket-header">{props.header ? props.header : "UI/UX Design"}</Card.Header>
      <Card.Body>
        <Card.Title className="card-paket-title text-start ms-1">{props.title ? props.title : "Belajar Figma UI/UX"}</Card.Title>
        <Card.Text className="card-paket-text text-start ms-1">
        {props.desc ? props.desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla"}
        </Card.Text>
        <Card.Text className="card-paket-diskon">
            <span>Rp {props.diskon ? props.diskon : "250.000"},-</span>
        </Card.Text>
        <Card.Text className="card-paket-harga">
            Rp {props.harga ? props.harga : "150.000"},-
        </Card.Text>
        <Button variant="warning" className="card-paket-btn" size="sm" href={props.href ? props.href : "#"}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPaket;
