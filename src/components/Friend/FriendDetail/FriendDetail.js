import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';


const FriendDetail = () => {
    const { friendId: fid } = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${fid}`;
        fetch(url).then(res => res.json()).then(data => setFriend(data))

    }, []);
    const handleClick = () => {
        history.push('/friends');
    }
    const { name, email, address, company, website } = friend;
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>friend details of id :{fid}</h2>
            <h1>Friend name : {name}</h1>
            <h2>Friend email : {email}</h2>
            <h3>Friend city: {address?.city}</h3>
            <h4>Friend Website: {website}</h4>
            <h5>Friend Company: {company?.name}</h5>
            <button type="button" onClick={handleClick}> Go to Friends</button>
            <br />
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default FriendDetail;
