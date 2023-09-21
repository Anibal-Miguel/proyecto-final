//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SearchFood from './components/SearchFood';
//import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchFood/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
