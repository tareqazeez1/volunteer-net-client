import React from 'react';
import { Link } from 'react-router-dom';
import './WorkCard.css';


const WorkCard = (props) => {
    const {img,name}= props.cardpic;

    return (
        <div className="cardBody">
            <Link to={`/register/${name}`} className="col-md-3 register">
                <img className="cardImg" src={img} alt="" />
                <h5 className="text">{name}</h5>
            </Link>
        </div>
    );
};

export default WorkCard;