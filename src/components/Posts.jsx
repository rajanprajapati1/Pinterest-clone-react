import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import {useMyContext} from '../useMyContext'

const Posts = () => {
  const [Active, setActive] = useState('for you');
  const {myState} = useMyContext()
  return (
    <>
    <Navbar User={myState}/>
      <div className='posts'>
        <div className="selectbar">
          <Link to={`feed`}>
            <button onClick={() => setActive("for you")}>For You  {Active === "for you" ? <hr /> : null}</button>
          </Link>
          <Link to={`feed/explore`}>
            <button onClick={() => setActive("Explore")}>Explore {Active === "Explore" ? <hr /> : null}</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Posts;
