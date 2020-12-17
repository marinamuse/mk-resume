import React from "react";
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/money.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className='cards'>
                    <div className="card">
                        <div className='icon'>
                            <img src={clock} alt="clock"></img>
                            <h3>Efficient</h3>
                        </div>
                        <p>Efficiency is extremely necessary criteria</p>
                    </div>
                    <div className="card">
                        <div className='icon'>
                            <img src={teamwork} alt="teamwork"></img>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Teamwork is extremely necessary criteria</p>
                    </div>
                    <div className="card">
                        <div className='icon'>
                            <img src={diaphragm} alt="diaphragm"></img>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Efficiency is extremely necessary criteria</p>
                    </div>
                    <div className="card">
                        <div className='icon'>
                            <img src={money} alt="money"></img>
                            <h3>Affordable</h3>
                        </div>
                        <p>Efficiency is extremely necessary criteria</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2}></img>
            </div>
        </div>
    )
}

export default ServicesSection;