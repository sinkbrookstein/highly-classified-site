import React, {useEffect, useState} from 'react';
import '../styles/HomePage.css';
import slide1 from '../assets/home-slide1.jpg';
import slide2 from '../assets/home-slide2.jpg';
import slide3 from '../assets/home-slide3.jpg';
import {Link} from 'react-router-dom';
import Footer from "../components/Footer.jsx";

const slides = [
    {
        image: slide1
    },
    {
        image: slide2
    },
    {
        image: slide3
    },
];

const HomePage = () => {

    return (
        <div className="home-container">
            <Slideshow/>
            <HireUsBlurb/>
            <Footer/>
        </div>
    );
};

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return <div className="slide-container">
        <div className="welcome-text">
            <p className="welcome">Welcome to</p>
            <i>Highly Classified</i>
            <p className="description">Denver’s finest in aerial entertainment</p>
        </div>
        <div className="slideshow">
            {slides.map((slide, index) => (
                <div
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                    key={index}
                    style={{backgroundImage: `url(${slide.image})`}}
                >
                    <div className="slide-overlay">
                        <h1 className="slide-text">{slide.text}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>;
}

function HireUsBlurb() {
    return <div className="services-section" id="services">
        <h2 className="section-title">Our Aerial Troupe</h2>
        <p className="services-description">
            In addition to our captivating stage performances, Highly Classified is available for custom events and
            experiences.
            We have many performers with a wide variety of specialties - from aerial silks to contortion to invented
            apparatus to dance,
            we are sure to liven up any event. Learn more:
        </p>
        <ul className="services-list">
            <li>✨ <a className="list-link"><Link to="/performances">Aerial Stage Performances</Link></a></li>
            <li>✨ <a className="list-link"><Link to="/hire-us">Hire Us for your private event</Link></a></li>
            {/*<li>✨ <a className="list-link"><Link to="/gallery">See our Gallery</Link></a></li>*/}
            <li>✨ <a className="list-link"><Link to="/donations">Donations</Link></a></li>
        </ul>
    </div>
}

export default HomePage;
