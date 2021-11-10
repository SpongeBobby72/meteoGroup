import React from "react";
import Card from "react-bootstrap/Card";

const CardMeteoWeek = (props) => {
  const { time } = props;
  return (
    <div className="cardDiv">
      <Card>
        {/* Image de fond */}
        <Card className={time.weather[0].main} />
        <Card.Body>
          {/* Date */}
          <Card.Title>
            {time.dt_txt.slice(8, 10)}/{time.dt_txt.slice(5, 7)}
          </Card.Title>
          {/* Heure */}
          <Card.Text>{time.dt_txt.slice(11, 16)}</Card.Text>
          {/* Temperature */}
          <Card.Text>{Math.round(time.main.temp)}°</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMeteoWeek;
