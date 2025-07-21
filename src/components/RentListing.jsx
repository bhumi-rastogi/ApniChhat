import React, { useEffect, useState } from 'react';
import mockForrentData from '../mockData/forrent.json';


const FetchSaleListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchListings = () => {
    setLoading(true);
    setError(null);
    const apiUrl = `https://realtor16.p.rapidapi.com/search/forrent?location=houston%2Ctx&search_radius=0`;

    const options = {
      method: 'GET',
      headers: {
        "x-rapidapi-host": "realtor16.p.rapidapi.com",
        // "x-rapidapi-key": "5bfecd6df4msh9e81400a9cc0056p123fb4jsnf64875e29b75"
      }
    }
    fetch(apiUrl,options)
      .then((response) => {
        // console.log(response);
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // return response.json();
        return mockForrentData;
      })
      .then((data) => {
        // console.log(data);
        setListings(data.listings || []);
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
    <div className='back'>
      <h1>Sale Listings</h1>
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      {loading && <p>Loading...</p>}
      <div className='scrolling'>
        {listings.map((listing, idx) => (
          <div className="prop" key={idx}>
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

export default FetchSaleListings;
