import React from 'react';
import { Container } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          {/* An <Outlet> should be used in parent route elements to render their child route elements. 
        This allows nested UI to show up when child routes are rendered. 
        If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}
          <Outlet />
        </Container>

      </main>
      <Footer />
      <ToastContainer />
    </>

  )
}

export default App