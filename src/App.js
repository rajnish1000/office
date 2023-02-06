
import './App.css';
import Dashboard from "./Components/Dashboard"
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import Empdashboard from './Components/Empdashboard';
import Blank from './Components/Blank';

function App() {
  return (
    <>
  
    <Routes>
    <Route path={"/"} element={<Login/>}/>
     <Route path={"/dashboard"} element={<Dashboard/>}/>
      <Route path={"/empdashboard"} element={<Empdashboard/>}/>
    </Routes>
    {/* <Blank/> */}
    </>
    
  );
}

export default App;
