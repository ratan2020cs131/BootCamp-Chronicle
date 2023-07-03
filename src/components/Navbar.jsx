import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const[logged, setLogged] = useState(false);

    const Navlink =() => {
        return(
            <>
            {logged ?
            <>
            <ul>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/logout'>Logout</NavLink></li>
            </ul>
            </>:
            <>
            <ul>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
            </ul>
            </>
            }
            </>
        )
    }
  return (
    <div>
      <Navlink/>
    </div>
  )
}

export default Navbar
