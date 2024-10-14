import React from 'react';
import './Style.css';

const OrganicDeal = () => {
    return (
        <div className="deal-container">
            <div className="container">
            <div className="deal-text">
                <p className="discount">35% OFF</p>
                <h2>Great deal on organic food.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do maecenas accumsan lacus vel facilisis.</p>
                <div className="countdown">
                    <span>77 Days</span>
                    <span>02 Hrs</span>
                    <span>25 Min</span>
                    <span>02 Sec</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrganicDeal;
