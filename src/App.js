import './App.css';
import { Route, Routes } from "react-router-dom";
import CalculatorPage from './components/CalculatorPage/CalculatorPage';
import Navigation from './components/Navigation';
import FriendList from './components/FriendList';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />}></Route>
        <Route path="/friends" element={<FriendList />}></Route>
      </Routes>
    </>
  );
}

export default App;
