import React, { useState, useEffect } from 'react'
import Friend from '../Friend/Friend';
import "./Friends.css";

const Friends = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div >
            <h2 style={{ textAlign: 'center' }}>i have {users.length} friends</h2>
            <div className="friends">
                {users.map(user => <Friend key={user.id} friends={user}></Friend>)}

            </div>
        </div>
    )
}

export default Friends
