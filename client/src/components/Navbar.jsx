import React,{useState, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {context} from '../App.js'

const Navbar = () => {
    const {state, dispatch} = useContext(context);

    const Navlink =() => {
        return(
            <>
            {state ?
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
