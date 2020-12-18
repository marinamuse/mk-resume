import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();

    return(
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Marina Kim</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. Overview</Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/' ? "30%" : "0%" }} />
                </li>
                <li>
                    <Link to="/work">2. Works</Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/work' ? "30%" : "0%" }} />
                </li>
                <li>
                    <Link to="/contact">3. Contacts</Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/contact' ? "30%" : "0%" }} />
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items:center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top:0;
    z-index:4;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo {
        font-family: 'Lobster', cursive;
        font-size: 1.5rem;
        font-weight: lighter;
    }
    li {
        padding-left: 4rem;
        position: relative;
    }
    @media (max-width: 750px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo{
            display:inline-block;
        }
        ul{
            padding: 2rem;
            justify-content:space-around;
            width: 100%;
            li{
                padding: 0;
            }
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background-color:#23d997;
    width:0%;
    position: absolute;
    bottom: -80%;
    left:40%;
`

export default Nav;