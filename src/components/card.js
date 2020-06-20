import React from "react";

const Card = props => (
    <div className="container__card">
        <div className="container__card--name">{props.name}</div>
        <div className="container__card--year">{props.year}</div>
    </div>
);

export default Card;
