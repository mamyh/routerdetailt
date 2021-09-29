import React from 'react';
import { Link } from 'react-router-dom';
import "./Friend.css";

const Friend = ({ friends }) => {
    const { id, name, email, phone, website, address } = friends;
    return (
        <div className="friend">
            <h2 >i am {name}</h2>
            <h3>my email is {email}</h3>
            <h5>my phone number is  {phone}</h5>
            <h6>i am from {address.city}</h6>
            <p>my website is {website}</p>
            <Link to={`/friend/${id}`}>Visit me</Link>
        </div>
    )
}

export default Friend
