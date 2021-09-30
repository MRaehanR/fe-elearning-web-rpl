import React from "react";
import "./CardPelajaran.css";
import { Card } from "react-bootstrap";
import LogikaDasar from "../../assets/LogikaDasar.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CardPelajaran(props) {
  const percentage = props.percentage ? props.percentage : 25;

  return (
    <Card className="card-pelajaran-container d-flex flex-row justify-content-between align-items-center">
      <Card.Img
        src={props.img ? props.img : LogikaDasar}
        className="card-pelajaran-img ms-4"
      />
      <Card.Body className="card-pelajaran-body ms-5">
        <Card.Title className="card-pelajaran-title">
          {props.title ? props.title : "Logika Dasar"}
        </Card.Title>
        <Card.Text className="card-pelajaran-desc">
          {props.desc
            ? props.desc
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet enim id quam interdum accumsan. Vestibulum vel auctor"}
        </Card.Text>
      </Card.Body>
      <div className="card-pelajaran-progress ms-auto m-3 me-5">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#000",
            textSize: "18px",
            pathColor: "#81BB61",
          })}
        />
      </div>
    </Card>
  );
}

export default CardPelajaran;
