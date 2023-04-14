import './App.css';
import { Route, Routes } from "react-router-dom";

import CalculatorPage from "./components/CalculatorPage"

function App() {
  return (
    <>
      <Routes>
        <Route path='/calculator'> 
          <CalculatorPage />
        </Route>
        
      </Routes>
    </>


  );
}

export default App;
