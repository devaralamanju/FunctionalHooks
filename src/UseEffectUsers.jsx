import React, { useEffect, useState } from 'react';

function UserEffectUsers() {
    const [user, setUser] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    return (
        <>
            {user.map((post) => (
                <div key={post.id}>
                    <h3>{post.name}</h3>
                    <p>Email: {post.email}</p>
                    <p>Street: {post.address.street}</p>
                    <p>City: {post.address.city}</p>
                    <p>Postal Code: {post.address.zipcode}</p>
                    <p>lat: {post.address.geo.lat}</p>
                    <p>lng: {post.address.geo.lng}</p>
                </div>
            ))}
        </>
    );
}

export default UserEffectUsers;
