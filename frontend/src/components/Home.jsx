import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
// import Footer from "./components/Footer";
// import data from "./data";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/test.php')
      .then(response => {
        // const parsedData = JSON.parse(response.data);
        console.log("Raw response data: ",response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  // Get the data from data.js and return a new array cards modified with new props
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        coverImg={item.coverImg}
        rating={item.rating}
        reviewCount={item.reviewCount}
        location={item.location}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      {/* <Footer /> */}
    </div>
  );
}