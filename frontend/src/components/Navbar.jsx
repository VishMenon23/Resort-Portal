import React from "react"
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();
    const handleNavigateHome = () => {
        navigate('/');
      };
    const handleNavigateCreate = () => {
        navigate('/create-resort');
      };
    return (
        <nav>
            {/* <img src="../images/airbnb-logo.jpg" className="nav--logo" /> */}
            <h1 style={{ margin: '0 20px', cursor: 'pointer' }} onClick={handleNavigateHome}>Home</h1>
            <h1 style={{ margin: '0 20px' }}>Resale</h1>
            <h1 style={{ margin: '0 20px' }}>Rentals</h1>
            <h1 style={{ margin: '0 20px' }}>FAQ</h1>
            <h1 style={{ margin: '0 20px' }}>Blog</h1>
            <h1 style={{ margin: '0 20px' }}>Contact</h1>
            <h1 style={{ margin: '0 20px', cursor: 'pointer' }} onClick={handleNavigateCreate}>Create Resort</h1>
        </nav>
    )
}