import './App.css';
import { Route, Routes } from "react-router-dom";
import CalculatorPage from './components/CalculatorPage/CalculatorPage';
import Navigation from './components/Navigation';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
