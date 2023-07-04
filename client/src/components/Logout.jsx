import React, {useEffect, useContext} from 'react'
import { context } from '../App.js'


const Logout = () => {
  const {state, dispatch} = useContext(context);

  useEffect(()=>{
    dispatch({type:'logout'})
  },[])

  return (
    <>
    </>
  )
}

export default Logout
