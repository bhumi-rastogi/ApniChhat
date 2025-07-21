import React, { useEffect, useState } from 'react';
import "../styles/ProList.css"
import mockForsaleData from '../mockData/forsale.json';

const PropertyListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchListings = () => {
    setLoading(true);
    setError(null);
    const location = 'New+York';
    const encodedLocation = encodeURIComponent(location);
    const apiUrl = `https://realtor16.p.rapidapi.com/search/forsale?location=${encodedLocation}&page=${page}`;

    const options = {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Key': '5bfecd6df4msh9e81400a9cc0056p123fb4jsnf64875e29b75',
      'X-RapidAPI-Host': 'realtor16.p.rapidapi.com',
    },
  };

    fetch(apiUrl,options)
      .then((response) => {
        // console.log(response);
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // return response.json();
        return mockForsaleData;
      })
      .then((data) => {
        // console.log(data);
        setListings(data.properties || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchListings();
  }, [page]);

  return (
    <div className='bg'>
      <h1>Sale Listings</h1>
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      {loading && <p>Loading...</p>}
      <div className='scroll'>
        {listings.map((listing, idx) => (
          <div className="property" key={idx}>
            <img src={listing.primary_photo.href} alt={listing.description?.type}/>
            <b> For : </b> {listing.description?.type}<br />
            <b> City : </b> {listing.location?.address?.city}<br />
            <b> Price :</b> ${listing.list_price}<br />
            <b> Property ID:</b> {listing.property_id}
          </div>
        ))}
    </div>
  </div>
  );
};

export default PropertyListing;
