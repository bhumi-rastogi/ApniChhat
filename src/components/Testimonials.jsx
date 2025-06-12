import React from 'react'
import Card from './Card';
import '../styles/testimonials.css'

const customers = [
  {
    key:1,
    image: 'src/assets/p1.jpeg',
    title: "John Doe",
    description: "Apna Ghar’s team guided me from start to finish without overwhelming me."
  },
  {
    key:2,
    image:'src/assets/p2.jpeg',
    title: "Jane Smith",
    description: "From the first visit to final paperwork, everything was handled professionally. Zero stress!"
  },
  {
    key:3,
    image:'src/assets/p3.jpeg',
    title: "Mike Johnson",
    description: "I’ve had bad experiences with property agents before, but Apna Ghar changed that. No hidden costs!"
  },
  {
    key:4,
    image:'src/assets/p4.webp',
    title: "Karen Potter",
    description: "Even after the purchase, they stayed in touch and helped us settle in."
  },
  {
    key:5,
    image:'src/assets/p1.jpeg',
    title: "John Luka",
    description: "The personal touch and care in every step was so reassuring."
  },
  {
    key:6,
    image:'src/assets/p2.jpeg',
    title: "Albert Smith",
    description: "Got the location, price, and vibe I wanted."
  },
  {
    key:7,
    image:'src/assets/p3.jpeg',
    title: "Mike Johned",
    description: "Transparent, trustworthy, and timely."
  },
  {
    key:8,
    image:'src/assets/p4.webp',
    title: "Hunt Altman",
    description: "They helped us find our dream home."
  },
]
const Testimonials = () => {
  return (
    <div className="box">
      <h2>Testimonials</h2>
      <div className="list">
        {customers.map((item) => (
          <Card key={item.key} {...item}/>
        ))}
      </div>
    </div>
  )
}

export default Testimonials