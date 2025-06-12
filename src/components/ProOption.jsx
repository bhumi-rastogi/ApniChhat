import React from 'react'
import Card from './Card';
import '../styles/option.css'

const property = [
  {
    key:1,
    image: 'src/assets/beach.jpg',
    title: "Beach House",
    description: "Coastal charm meets modern comfort in this serene retreat."
  },
  {
    key:2,
    image:'src/assets/family.jpg',
    title: "Cozy House",
    description: "Charming and comfortable, where every corner feels like home."
  },
  {
    key:3,
    image:'src/assets/gothic.jpg',
    title: "The Blackwood Estate",
    description: "Ornate and enigmatic, this historic home offers a dramatic escape."
  },
  {
    key:4,
    image:'src/assets/morden.jpg',
    title: "The Modern Dwelling",
    description: "Clean lines and smart design define this minimalist, functional home."
  },
  {
    key:5,
    image:'src/assets/palace.jpg',
    title: "The Royal Estate",
    description: "Opulent grandeur and timeless elegance define this sprawling, majestic residence."
  },
  {
    key:6,
    image:'src/assets/penthouse.jpg',
    title: "The Sky Sanctuary",
    description: "Elevated luxury with panoramic views and unparalleled urban living."
  },
  {
    key:7,
    image:'src/assets/premium.jpg',
    title: "The Shadow Peak Residence",
    description: "Dramatic views from a secluded, elevated retreat."
  },
  {
    key:8,
    image:'src/assets/bunglow.jpg',
    title: "The Cozy Retreat",
    description: "Spacious two-story living, combining classic charm with modern comfort."
  },
  {
    key:9,
    image:'src/assets/villa.jpg',
    title: "The Estate",
    description: "Spacious luxury, private escape."
  }
]
const ProOption = () => {
  return (
    <div className="container">
      <h2>Featured Properties</h2>
      <div className="list">
        {property.map((item) => (
          <Card key={item.key} {...item}/>
        ))}
      </div>
    </div>
  )
}

export default ProOption