import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/test.php', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <Navbar />
            <Hero />
            <h1>Create Entry</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        {/* <tr>
                            <th>
                                <label>ID: </label>
                            </th>
                            <td>
                                <input type="text" name="id" onChange={handleChange} />
                            </td>
                        </tr> */}
                        <tr>
                            <th>
                                <label>Title: </label>
                            </th>
                            <td>
                                <input type="text" name="title" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Description: </label>
                            </th>
                            <td> 
                                <input type="text" name="description" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Price: </label>
                            </th>
                            <td>
                                <input type="text" name="price" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>coverImg: </label>
                            </th>
                            <td>
                                <input type="text" name="coverImg" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Rating: </label>
                            </th>
                            <td>
                                <input type="text" name="rating" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Review Count: </label>
                            </th>
                            <td>
                                <input type="text" name="reviewCount" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Location: </label>
                            </th>
                            <td>
                                <input type="text" name="location" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>openSpots: </label>
                            </th>
                            <td>
                                <input type="text" name="openSpots" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}