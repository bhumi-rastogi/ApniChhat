import React,{useState} from 'react'
import ProOption from "../components/ProOption.jsx"
import Footer from '../components/Footer'
import Hero from '../components/Hero.jsx'
import FetchSaleListings from '../components/ProList.jsx'
import PropertyRentListing from '../components/RentListing.jsx'

const Property = () => {
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  return (
    <>
    <Hero/>
    <ProOption/>
    <FetchSaleListings/>
    <PropertyRentListing/>
    <Footer/>
    </>
  )
}

export default Property