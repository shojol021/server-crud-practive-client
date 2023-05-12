import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
    const LoadedUsers = useLoaderData();
    const [users, setUsers] = useState(LoadedUsers)

    const handleDelete = (_id) => {
        console.log('delete', _id)

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = users.filter(user => user._id !== _id)
            setUsers(remaining)
        })
    }

    return (
        <div>
            {
                users.map(user => <h3
                    key={user._id}>
                    Name: {user.name},
                    Email: {user.email},
                    ID: {user._id} 
                    <Link to={`/users/${user._id}`}>Update</Link>
                    <button onClick={() => handleDelete(user._id)}>X</button>
                </h3>)
            }

            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default User;