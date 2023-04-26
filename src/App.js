import './App.css';
import { Route, Routes } from "react-router-dom";
import CalculatorPage from './components/CalculatorPage/CalculatorPage';
import Navigation from './components/Navigation';
import FriendList from './components/FriendList';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Toggle from './components/Toggle';

function App() {

  return (
    <ThemeProvider>
      <Navigation />
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />}></Route>
        <Route path="/friends" element={<FriendList />}></Route>
        <Route path='/toggle' element={<Toggle />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
