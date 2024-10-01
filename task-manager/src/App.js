import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
        <div className="app">
            <h1>Task Manager</h1>
            <Login />
            <Register />
        </div>
    );
};

export default App;
