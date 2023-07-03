import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'

function App() {
  const Routing =()=>{
      return(
        <Routes>
          <Route path='/'
          element={<Home/>}/>
          <Route path='/login'
          element={<Login/>}/>
          <Route path='/register'
          element={<Register/>}/>
        </Routes>
      )
  }

  return (
    <>
      <Navbar/>
      <Routing/>
    </>
  );
}

export default App;

