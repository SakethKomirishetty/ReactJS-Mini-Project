
import "./card.css";
import React from 'react';
import { Link } from 'react-router-dom';

function CustomCard(props) {
    return (
        <div>
            <div>
                <div className="custom-card p-3 custom-product-card" style={{ width: "15rem;" }}>
                    <img className="custom-img-top img-thumbnail custom-thumbnail" src={props.image} alt='productimage' style={{ height: "80px;", width: "80px;" }} />
                    <div className="custom-card-body">
                        <h5 className="custom-title text-center">{props.title} </h5>
                        <Link to={`${props.id}`}>
                            <button className="custom-redirect-button mt-1">Know More...</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomCard;
