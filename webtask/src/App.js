import React from 'react';
import './App.css';
import Topbar from './components/TopBar';
import CarScreen from './components/CarScreen';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <CarScreen idCar="1395P"/>
      <Button />
      <Footer idCar="1395P"/>
    </div>
  );
}

export default App;