import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from "./src/components/UserForm";
import UserList from './src/components/UserList';

const App = () => {
  const [users, setUsers] = useState<{ name: string; age: number }[]>([]);

  const addUser = (name: string, age: number) => {
    setUsers((prevUsers) => [...prevUsers, { name, age }]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">User Form</Link>
        <Link to="/user-list">User List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserForm  />} />
        <Route path="/user-list" element={<UserList users={users} />} />
      </Routes>
    </Router>
  );
};

export default App;
