import './App.css';
import { Route, Routes } from "react-router-dom";
import CalculatorPage from './components/CalculatorPage/CalculatorPage';
import Navigation from './components/Navigation';
import FriendList from './components/FriendList';
import { useState } from 'react';
import React from 'react';

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(prev => !prev)
  }

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };
  
  return (
    <ThemeContext.Provider value={darkTheme}>
      <Navigation />
      <button onClick={toggleTheme}>Toggle</button>
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />}></Route>
        <Route path="/friends" element={<FriendList />}></Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
