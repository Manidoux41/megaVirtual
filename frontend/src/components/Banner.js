import React from 'react';
import banner from '../assets/images/banner.jpg'


const Banner = () => {
    return (
        <div className='banner'>
            <div className="content">
                <img src={banner} alt="banner" />
                <div className="banner__content">
                    <h2>Mega<span>Virtual Airline</span></h2>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;