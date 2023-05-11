import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user)

    fetch('http://localhost:5000/users',{
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      const newUsers = [...users, data]
      setUsers(newUsers)
      form.reset()
    })
  }

  return (
    <>
      
      <h1>User Management System</h1>
      <h3>Total User: {users.length}</h3>
      <form onSubmit={handleUser} action="">
        <input type="text" name='name' placeholder='Enter name' />
        <br />
        <input type="email" name='email' placeholder='Enter email' />
        <br />
        <input type="submit" />
      </form>
      {
        users.map(user => <p key={user.id}> {user.id}: {user.name}, {user.email}</p>)
      }
    </>
  )
}

export default App
