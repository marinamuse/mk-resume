import React, {useState} from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {fade} from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();

    return(
        <Faq
        variants={fade}
        ref={element}
        animate={controls}
        initial="hidden"
        >
            <h2>Background<span>summary</span></h2>
            <AnimateSharedLayout>
            <Toggle title='Education'>
                
                    <div className="answer">
                        <p>How it all began...</p>
                        <p>In 2007 enrolled to Kazakh-British Technical University (Almaty, Kazakhstan). Left in 2009 due to high tution fees and went to Karachaganak field for work. Graduated (August 2011) from London School of Economics and Political Sciences via University of London international program (self-studies distance learning / UK BSc degree / Finance and Banking). Graduated (August 2019) from the same university (UK / Graduate Diploma / Information Systems).</p>
                    </div>
                    
                
            </Toggle>
            <Toggle title="Work">
                
                    <div className="answer">
                        <p>My career journey...</p>
                        <p>After leaving the university in 2009, came to Karachaganak field without higher education to work as a technical translator. After receiving my first higher education diploma in 2011, went to Almaty to work for Ernst & Young. Started to work for KPO B.V. (international oil and gas consortium) in 2012 as an internal auditor. Then promoted to the Corporate Systems Coordinator (coordinating venture-wide processes such as business continuity planning, change management, risk management etc.). After receiving my second degree in 2019 was promoted to Information Systems Projects and Audits Lead (leading IT audits and projects, providing IT trainings to colleagues). My position was eliminated as of August 2020 due to pandemic situation.</p>
                    </div>
                
            </Toggle>
            <Toggle title="What I do now?">
                
                    <div className="answer">
                        <p>Agility and adaptability...</p>
                        <p>Losing the job has been emotionally challenging but led me to a new goal, a new dream - becoming a Full Stack Developer, a tech influencer and entrepreneur. I believe that dedication and hard work are key to achieving the goal. I've started my Instagram and YouTube channel, opened a TechMuse print-on-demand store, launched a tech blog, registered a SymbiosTech limited liability company. I'm studying and working everyday to reach my dream as soon as possible. Now I do various projects for clients and partners, one of which is related to new COVID-19 rapid tests, another one aims to develop and launch an integrated database of COVID-19 test and vaccines data, couple of website and mobile app development projects. I am also attending a Nucamp Advanced Full Stack Web and Mobile Bootcamp (graduate March 2021).</p>
                    </div>
                
            </Toggle>
            <Toggle title="Just about me...">
                
                    <div className="answer">
                        <p>Dream big, work hard...</p>
                        <p>As far as I remember myself, I was always keen on learning something new. When I was 15 I started to play drums, 
                            later at age of 17, I was fascinated to learn how to play Don't Cry by Guns N' Roses on guitar, only we could not afford a guitar, 
                            so I made one from paper to learn how to move the fingers and when my friend saw this, he gave me a brand new Korean guitar as a present for my birthday!
                            Life is teaching me always not to be afraid to dream big, but at the same time to work hard, have positive thinking, good intentions, be honest with others and with yourself.
                        </p>
                    </div>
                
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background:#cccccc;
        height: 0.01rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 2rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
            font-size: 1rem;
        }
    }
`

export default FaqSection;