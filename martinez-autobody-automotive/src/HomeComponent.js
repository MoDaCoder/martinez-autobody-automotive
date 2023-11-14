import React from 'react'

const HomeComponent = () => (
    <div className='home-container'>
        <div className='home-card'>
            <video className='home-video-background' src="/img/shop.mp4" alt='video of black car'></video>
            <div className='home-text'>
                <h1 className='home-title'>Martinez Tire</h1><br></br>
                <h1 className='home-title'>And</h1><br></br>
                <h1 className='home-title'>Automotive</h1>
                <h2 className='sub-title'>San Antonio's #1 Automotive Shop</h2>
            </div>
            <div className='home-links-container'>
                <a className='home-links' href="#about"><span>Learn More About Us &gt;</span></a>
                <a className='home-links' href="#services"><span>Our Services &gt;</span></a>
            </div>
        </div>
    </div>
);

export default HomeComponent;