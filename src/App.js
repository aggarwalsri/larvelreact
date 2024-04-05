
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUserForm from './components/createUserForm';
import UserList from './components/userlist';
const App = () => {
  return (
    <Router>
      <Routes>
	  <Route exact path="/" element={<CreateUserForm/>} />
        <Route path="/list/:role" element={<UserList/>} />
      </Routes>
    </Router>
  );
};

export default App;

