import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import './Main.css';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-image w-full h-screen'>
          <section>
            <NavBar></NavBar>
          </section>
          <section>
            <Outlet></Outlet>
          </section>
        </div>
    );
};

export default Main;