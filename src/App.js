
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Employees from './components/Employees';
import Cart from './components/Cart';
import Header from './components/Header';
import NotFound from './components/NotFound';
import React, { Suspense } from 'react';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';


function App() {
  const LazyProducts = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/Products')), 300)
    })

  })

  return (
    <div className="App">

      <Header />
      <Routes>
      <Route path="/Login" element={<Login />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/" element={<Home />} />
        
        <Route path="/employees" element={<Employees />} />

        <Route path="/products" element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyProducts />
          </Suspense>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
