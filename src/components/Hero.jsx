import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className="main">

      <div className="text">
      <h1><b>Let's Find Your <br/> Dream House</b></h1>
      </div>

      <form>
        <h2>Get in Touch</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type='text' placeholder="Your Message" id='msg' />
        <button type="submit">Send Message</button>
      </form>

    </div>
  )
}

export default Hero
