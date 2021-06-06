import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

const ContactUs = () => {
    return(
        <ContactStyle 
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            style={{ background: "#fff" }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a style={{textDecoration: 'none', color: '#353535'}} href="mailto:marina@marinakim.kz"><h2>Send email</h2></a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a style={{textDecoration: 'none', color: '#353535'}} href="https://www.linkedin.com/in/marinawebdev/" target="_blank"><h2>LinkedIn profile</h2></a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a style={{textDecoration: 'none', color: '#353535'}} href="https://www.instagram.com/marina_webdev/" target="_blank"><h2>Instagram account</h2></a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a style={{textDecoration: 'none', color: '#353535'}} href="https://www.youtube.com/channel/UCV-AVH8pbyU9rjt4EUr3fgg?view_as=subscriber" target="_blank"><h2>YouTube channel</h2></a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a style={{textDecoration: 'none', color: '#353535'}} href="https://musedesigns.tech/" target="_blank"><h2>Technical Blog</h2></a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a style={{textDecoration: 'none', color: '#353535'}} href="http://symbiostech.org/" target="_blank"><h2>SymbiosTech LLP</h2></a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a style={{textDecoration: 'none', color: '#353535'}} href="https://techmuse.myteespring.co/" target="_blank"><h2>My Teespring Store</h2></a>
                    </Social>
                </Hide>
            </div>
            <ScrollTop />
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 750px) {
        padding: 2rem;
        font-size: 1rem;        
    }
`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 750px) {
        margin-top: 5rem;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

const Circle = styled.div`
    border-radius:50%;
    width: 1.3rem;
    height: 1.3rem;
    background-color:#353535;
`

const Social = styled(motion.div)`
    display: fles;
    align-items: center;
    h2{ 
        margin: 2rem;
        font-size:2rem;
    }
`

export default ContactUs;