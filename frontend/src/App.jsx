// import React, { useState, useEffect } from 'react';
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Card from "./components/Card";
// import CreateResort from './components/CreateResort';
// // import Footer from "./components/Footer";
// // import data from "./data";
// import axios from "axios";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// export default function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost/test.php')
//       .then(response => {
//         console.log(response)
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, []);
//   // Get the data from data.js and return a new array cards modified with new props
//   const cards = data.map((item) => {
//     return (
//       <Card
//         key={item.id}
//         title={item.title}
//         description={item.description}
//         price={item.price}
//         coverImg={item.coverImg}
//         rating={item.rating}
//         reviewCount={item.reviewCount}
//         location={item.location}
//         openSpots={item.openSpots}
//       />
//     );
//   });

//   return (
//     <Router>
//     <div>
//       <Navbar />
//       <Routes>
//           <Route path="/create-resort" element={<CreateResort />} />
//         </Routes>
//       <Hero />
//       <section className="cards-list">
//         {cards}
//       </section>
//       {/* <Footer /> */}
//     </div>
//     </Router>
//   );
// }
import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CreateResort from './components/CreateResort';
import Home from './components/Home';
// import Footer from "./components/Footer";
// import data from "./data";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-resort" element={<CreateResort />} />
        </Routes>
    </Router>
  );
}