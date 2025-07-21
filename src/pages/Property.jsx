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
    {/* <h1 style={{ marginTop: "20px" }}>Properties</h1> */}
    <Hero/>
    <ProOption/>
    {/* <FetchSaleListings/> */}
    <PropertyRentListing/>
    <Footer/>
    </>
  )
}

export default Property