import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log('got user from form', user)

    fetch('http://localhost:5000/users', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('got user data from server again', data)
        if (data.insertedId) {
          alert('user added successfully')
        }
      })
  }

  return (
    <>

      <h1>Simple CRUD</h1>
      <h3>Total User:</h3>
      <form onSubmit={handleUser} action="">
        <input type="text" name='name' placeholder='Enter name' required />
        <br />
        <input type="email" name='email' placeholder='Enter email' required />
        <br />
        <input type="submit" required />
      </form>
      <br />
      <Link to='/users'>See Users</Link>
    </>
  )
}

export default App
