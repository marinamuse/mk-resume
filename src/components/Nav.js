import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Marina Kim</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. Overview</Link>
                </li>
                <li>
                    <Link to="/work">2. Works</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contacts</Link>
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
    position: relative;
    z-index:3;
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
`

export default Nav;