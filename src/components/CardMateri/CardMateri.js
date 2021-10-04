import React from "react";
import { Card } from "react-bootstrap";
import "./CardMateri.css";
import LogikaDasar from "../../assets/LogikaDasar.svg";

function CardMateri(props) {
  return (
    <div className="materi-container">
      <a className="materi-anchor" href={props.href ? props.href : "#"}>
        <Card className="materi-card">
          <Card.Img
            className="materi-img"
            src={props.img ? props.img : LogikaDasar}
          />
          <Card.Body className="text-center">
            <Card.Title className="materi-title">
              {props.title ? props.title : "Title Pelajaran"}
            </Card.Title>
            <Card.Text className="materi-text">
              {props.desc
                ? props.desc
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum."}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default CardMateri;
