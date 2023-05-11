import { useLoaderData, useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
    const users = useLoaderData();

    const handleDelete = (id) => {
        console.log(id)

        fetch(`http://localhost:5173/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <div>
            {
                users.map(user => <h3
                    key={user._id}>
                    Name: {user.name},
                    Email: {user.email},
                    ID: {user._id}
                    <button onClick={() => handleDelete(user._id)}>X</button>
                </h3>)
            }

            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default User;