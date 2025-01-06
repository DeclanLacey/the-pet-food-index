import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div className='home'>
      {/* <img className='home_floating-img-one' src='./assets/cat-img.jpg' /> */}
      <img className='home_logo' src='./assets/logo-transparent.png' />
      <h1 className='home_title'>Welcome to<br></br> THE Pet Food Index</h1>

      <div className='home_about-container'>
        <img className='home_about-img' src='./assets/kibble-bowl-2.jpg' />
        <div className='home_about-content-container'>
          <div className='home_about-title-container'>
            <div className='home_about-line'></div>
            <h2 className='home_about-title'>About</h2>
          </div>
          
          <h3 className='home_about-subtitle'>Our mission is to empower pet owners with clear, accessible facts about the food they choose for their pets</h3>
          <p className='home_about-text'>
            The food that we feed our pets determines their health just as much as the
            food we eat ourselves does. When it comes to your pet, you have the power to 
            ensure that they receive a healthy, consistent, and appropriate diet. It can be hard
            to easily find the facts about the plethora of pet foods available today. Consumers have more
            choice than ever! But with more choice comes more questions. 
          </p>

          <p className='home_about-text'>
            THE Pet Food Index aims to provide
            a reliable source for finding the facts, and just the facts. We hope that this will allow you
            to make informed decisions about your pets diet, and help them live a long happy life. 
          </p>
        </div>
      </div>
    </div>
  )
}
