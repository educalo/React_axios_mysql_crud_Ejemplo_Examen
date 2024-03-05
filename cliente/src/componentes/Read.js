import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 
const Read = () => {
    const {id} = useParams();
    const [user, setUsers] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:3001/userdetails/"+id)
        .then(res => {
            console.log(res)
            setUsers(res.data[0]);
        })
        .catch(err => console.log(err))
    }, []);
 
  return (
    <div className="container">
        <div className='row'>
        <div className='col-md-12'>
        <h1>Detalle de usuario</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre completo</th>
                        <th>Email</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                </tbody>
            </table>
      </div>
      </div>
    </div>
  );
};
 
export default Read;