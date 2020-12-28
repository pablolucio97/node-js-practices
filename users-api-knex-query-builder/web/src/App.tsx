import React, {useState, FormEvent, useEffect} from 'react';
import api from './services/api'

import './styles/styles.css'

interface Item{
  name: string,
  age: string
}


function App() {

  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [users, setUsers] = useState<Item[]>([])
  const [usersAge, setUsersAge] = useState<Item[]>([])
  const [userId, setUserId] = useState('')
  const [newName, setNewName] = useState('')

  
  //READ USERS
  useEffect(() => {
    api.get('list-users').then(response => {
      setUsers(response.data)
      setUsersAge(response.data)
    })
  })

 

  //CREATE USERS
  const createUsers = async () => {
    
    api.post('/create-users', {
      name : userName,
      age : userAge
    }).then(response => console.log(response.data))
  }

  //ALTER USER NAME
  const alterUserName = async () => {
    api.put('/alter-users/' + userId, {name: newName}).then(response => setUserName(response.data))
  }

  //DELETE USER
  const deleteUser = async () => {
    api.delete('/delete-users/' + userId).then(response => response.data)
  }



  return (
    <div className="main-container">
      <div className="row-container">
      <div className="create-user">
        <h3>Create a new user:</h3>
        <p>Name:</p>
        <input type="text" name="name"
         id="name"
         onChange={e => setUserName(e.target.value) }/>
         <p>Age:</p>
        <input type="number"
        name="age"
        id="age"
        max={100} 
        min={1} 
        onChange={e => setUserAge(e.target.value)}/>
        <p>{userName}</p>
        <p>{userAge}</p>
        <button onClick={createUsers}>Create User</button>
      </div>
      <div className="update-user">
      <h3>Altering a user name by the id:</h3>
        <p>User id: {userId}</p>
        <input type="number" 
        name="user-id" id="user-id" 
        placeholder='Type the id' 
        max={50} min={1} 
        onChange={e => setUserId(e.target.value)}/>
        <p>New name: {newName}</p>
        <input type="text" 
        name="user-id" id="user-id" 
        placeholder='Type the new name' 
        max={50} 
        min={1} 
        onChange={e => setNewName(e.target.value)}/>
        <button onClick={alterUserName}>Alter UserName</button>
      </div>
      <div className="delete-user">
        <h3> Deleting an user by the id</h3>
        <p>User id: {userId}</p>
        <input type="number" 
         name="user-id" id="user-id" 
         placeholder='Type the id' 
         max={50} min={1} 
         onChange={e => setUserId(e.target.value)}/>
        <button onClick={deleteUser}>Delete user</button>
      </div>
      </div>
      <div className="list-users">
        <h3>Listing all users:</h3>
          <ul>
        {users.map(item => (
          <li>Name: {item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
