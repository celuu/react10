import './App.css';
import { Route, Routes } from "react-router-dom";
import CalculatorPage from './components/CalculatorPage/CalculatorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
