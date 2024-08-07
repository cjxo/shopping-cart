//import { useState } from 'react';
import "./App.css";
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>

      <footer>
        <div></div>
        <div>© 2024 Fashion Hive. All rights reserved.</div>
      </footer>
    </>
  );
}

export default App;