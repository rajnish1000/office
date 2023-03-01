
import './App.css';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import Empdashboard from './Components/Empdashboard';
import Sidebar from './Components/Sidebar';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Editdata from './Components/Editdata';

function App() {
  return (
    <>

      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/Sidebar"} element={<Sidebar />} />
        <Route path={"/empdashboard"} element={<Empdashboard />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/Profile"} element={<Profile/>} />
        <Route path={"/editdata/:id"} element={<Editdata/>} />
      </Routes>

    </>

  );
}

export default App;
