import React from "react";
import clock from '../img/working.png';
import diaphragm from '../img/coding.png';
import money from '../img/certificate.png';
import teamwork from '../img/curious.png';
import home2 from '../img/youtube.png';
import {About, Description, Image} from '../styles';
import styled from 'styled-components';
import {fade} from '../animation';
import {useScroll} from './useScroll';

const ServicesSection = () => {
    const [element, controls] = useScroll();

    return(
        <Services ref={element} variants={fade} animate={controls}>
            <Description>
                <h2>Main <span>qualities</span> <br></br>and skills</h2>
                <Cards>
                    <Card>
                        <div className='icon'>
                            <img src={clock} alt="clock"></img>
                            <h3>Commitment</h3>
                        </div>
                        <p>"Motivation is what gets you started. Commitment is what keeps you going."</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <img src={teamwork} alt="teamwork"></img>
                            <h3>Curiousity</h3>
                        </div>
                        <p>"The best in business have boundless curiosity and open minds."</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <img src={diaphragm} alt="diaphragm"></img>
                            <h3>MERN-stack</h3>
                        </div>
                        <p>Udemy WebDev Bootcamp (Oct-20), Nucamp Full Stack Bootcamp (March-21)</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <img src={money} alt="money"></img>
                            <h3>Certified ISA</h3>
                        </div>
                        <p>Information systems auditor certified by IS Assurance and Controls Association</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img style={{borderRadius: '8px'}} src={home2}></img>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom: 4rem;
    }
    p{
        width: 90%;
        padding: 2rem 0rem 2rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 750px) {
         justify-content: center;   
        }
`;

const Card = styled.div`
    flex-basis: 12rem;
    img{
        width:2rem;
    }
    .icon {
        display: flex;
        align-items: center;
        h3{
            font-size: 1rem;
            background-color: white;
            color: black;
            margin-left: 1rem;
        };
    };
    p{
        font-size:1rem;
    }
`

export default ServicesSection;