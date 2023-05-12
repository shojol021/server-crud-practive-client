import { useLoaderData, useNavigate } from "react-router-dom";

const SingleUser = () => {
    const user = useLoaderData()
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email }


        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    form.reset()
                    alert('updated successfully')
                    
                }
            })
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <form onSubmit={handleUpdate} action="">
                <input type="text" name="name" defaultValue={user.name} />
                <br />
                <input type="text" name="email" defaultValue={user.email} />
                <br />
                <input type="submit" value='Update' />
            </form>

            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default SingleUser;