import React from 'react';
import './Style.css'; // Ensure this CSS file is included

const FeatureInfo = () => {
    return (
        <div className="feature-container container">
            <div className="feature-row">
                {/* First Feature - Product Packing */}
                <div className="feature-item">
                    <div className="icon-container">
                        <i class="fa-solid fa-boxes-packing text-success"></i>
                    </div>
                    <h5>Product Packing</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>

                {/* Second Feature - 24x7 Support */}
                <div className="feature-item">
                    <div className="icon-container">
                        <i class="fa-solid fa-headset text-success"></i>
                    </div>
                    <h5>24x7 Support</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>

                {/* Third Feature - Delivery in 5 Days */}
                <div className="feature-item">
                    <div className="icon-container">
                        <i class="fa-solid fa-truck text-success"></i>
                    </div>
                    <h5>Delivery in 5 Days</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureInfo;
