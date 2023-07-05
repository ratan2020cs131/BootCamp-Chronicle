import React, {useEffect, useContext} from 'react'
import { context } from '../App.js'
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(context);

  useEffect(()=>{
    dispatch({type:'logout'})
    navigate('/login')
  },[])

  return (
    <>
    </>
  )
}

export default Logout
