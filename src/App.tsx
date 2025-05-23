import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from "./components/UserForm";
import UserList from './components/UserList';

const App = () => {
  //const [users, setUsers] = useState<{ name: string; age: number }[]>([]);
  
  const userList = [
  { name: 'Carlos', age: 30 },
  { name: 'Ana', age: 25 },
  { name: 'Beatriz', age: 28 },
  { name: 'David', age: 35 }
];


  return (
    <Router>
      <nav>
        <Link to="/">User Form</Link>
        <br />
        <Link to="/user-list">User List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserForm  />} />
        <Route path="/user-list" element={<UserList users={userList} />} />
      </Routes>
    </Router>
  );
};

export default App;