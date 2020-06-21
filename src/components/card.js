import React from "react";

const onClick = link => {
    window.open(link, '_blank');
};

const Card = props => (
    <div className="container__card" onClick={() => onClick(props.link)}>
        <img
            src={props.image}
            style={{width: '300px'}}
            alt={props.name}
        />
        <div className="container__card--name">{props.name}</div>
        <div className="container__card--year">{props.year}</div>
    </div>
);

export default Card;
