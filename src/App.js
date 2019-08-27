import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import NavList from './components/NavList'
import MainPage from './components/MainPage'
import "./stylesheets/listStyle.css" 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <NavList />
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
