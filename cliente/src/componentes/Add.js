import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
const Add = () => {
  const [users, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/create", users);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div className="container">
    <h2 className='w-100 d-flex justify-content-center p-3'>Add New User</h2>
        <div className='row'>
            <div className='col-md-12'>
                <h3>Añadir detalles</h3>
                <form>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Full Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Añade tu nombre completo" name="name" onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Añade tu email" name="email" onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Password:</label>
                        <input type="text" className="form-control" id="password" placeholder="añade tu contraseña" name="password" onChange={handleChange} required/>
                    </div>
                      
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add User</button>
                    <Link to="/">Ver todos los usuarios</Link>
                </form>
            </div>
        </div>
</div>
  );
};
 
export default Add;