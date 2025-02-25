"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero';
import About from './About/About';
import Feature from './Feature/Feature';
import Services from './Services/Services';
import Client from './ClintReview/Client';
import Team from './Team/Team';
import Pricing from './Pricing/Pricing';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Home = () => {
    useEffect(() => {
        const initAOS = async () => {
            await import('aos');
            AOS.init(
                {
                    duration: 1000,
                    easing: 'ease',
                    once: true,
                    anchorPlacement: 'top-bottom',
                }
            );
        }
        initAOS();
    }, []);
    return (
        <div className=' overflow-hidden'>
            < Hero />
            <About />
            <Feature />
            <Services />
            <Client />
            <Team />
            <Pricing />
        </div>
    );

};

export default Home;
