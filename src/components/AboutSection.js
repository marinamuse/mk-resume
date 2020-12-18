import React, {useEffect} from 'react';
import profile from '../img/aboutusimg.png';
import {About, Description, Image, Hide} from '../styles';
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave';
import {Link} from 'react-router-dom';

const AboutSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    let width = window.innerWidth;

        if(width > 750) {
           return(
            <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}><span>Programming</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}> and good music</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>are my <span>passion</span></motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Experienced IT auditor, IT projects manager and amateur musician turned Full Stack MERN Developer
                </motion.p>
                <Link to="/contact"><motion.button variants={fade}>GET IN TOUCH</motion.button></Link>
            </Description>
            <Image>
                <motion.img style={{borderRadius: '8px'}} variants={photoAnim} src={profile} alt="profile-pic"></motion.img>
            </Image>
            <Wave />
        </About>
           ) 
        } else {
            return(
                <About>
                <Description>
                    <motion.div className="title">
                        <Hide>
                            <motion.h2 variants={titleAnim}><span>Programming</span></motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 variants={titleAnim}> and good music</motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 variants={titleAnim}>are my <span>passion</span></motion.h2>
                        </Hide>
                    </motion.div>
                    <motion.p variants={fade}>
                        Experienced IT auditor, IT projects manager and amateur musician turned Full Stack MERN Developer
                    </motion.p>
                    <Wave />
                    <motion.button variants={fade}>GET IN TOUCH</motion.button>
                </Description>
                <Image>
                    <motion.img style={{borderRadius: '8px'}} variants={photoAnim} src={profile} alt="profile-pic"></motion.img>
                </Image>
            </About>
               ) 
        }
    }

export default AboutSection;