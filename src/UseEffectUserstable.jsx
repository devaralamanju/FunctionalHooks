import React, { useEffect, useState } from 'react';

function UseEffectUserstable() {
    const [user, setUser] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    return (
  <table className='m-4 border table table-striped'>
            <thead >
                <tr className="border p-2">
                    <th className="border p-2 ">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Street</th>
                    <th className="border p-2">City</th>
                    <th className="border p-2">Postal Code</th>
                    <th className="border p-2">Latitude</th>
                    <th className="border p-2">Longitude</th>
                </tr>
            </thead>
            <tbody>
                {user.map((post) => (
                    <tr key={post.id} tr className="border p-2">
                        <td tr className="border p-2">{post.name}</td>
                        <td tr className="border p-2">{post.email}</td>
                        <td tr className="border p-2">{post.address.street}</td>
                        <td tr className="border p-2">{post.address.city}</td>
                        <td tr className="border p-2">{post.address.zipcode}</td>
                        <td tr className="border p-2">{post.address.geo.lat}</td>
                        <td tr className="border p-2">{post.address.geo.lng}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    );
}

export default UseEffectUserstable;
