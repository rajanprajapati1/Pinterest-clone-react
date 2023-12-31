import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PinLayout from './components/PinLayout'
import Login from './components/Login'
import {useMyContext} from './useMyContext'

const App = () => {
  const { setMyState } = useMyContext();
  const [User,SetUser] = useState(null);
  const LoginUser = async()=>{
    try {
      const res = await fetch('http://localhost:4000/auth/login/Success',{
      method: "GET",
      credentials: "include",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
  });

  if (res.ok) {
      const data = await res.json();
      SetUser(data.user)
      setMyState(data.user)
  } else {
      throw new Error("Authentication has been failed");
  }
} catch (err) {
  console.error(err);
}
};
useEffect(()=>{
  LoginUser();
},[])
  return (
    <div className='Main'>
   <BrowserRouter>
    <Routes>
    <Route path='/' element={User ? <Posts/> : <Navigate to="/login"/> }>
      <Route path='feed' element={User ? <PinLayout/> : <Navigate to={"/login"}/>}/>
      <Route path='feed/explore' element={<Navbar />}/>
      </Route>
      <Route path='/login' element={User ? <Navigate to={"/"}/> : <Login/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
