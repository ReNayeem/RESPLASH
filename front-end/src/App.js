import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Container/Home';

const App = () => {
    return (
        <Routes>
            <Route path='login' element={<Login></Login>} />
            <Route path='/*' element={<Home></Home>} />
        </Routes>
    );
};

export default App;