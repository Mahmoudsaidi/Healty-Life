import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//componets
import MealSuggestionsPage from './componets/MealSuggestions';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
//Pages
import Home from './pages/Home';
import application from './pages/Application';
import about from './pages/about';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/application' Component={application}/>
        <Route path='/about' Component={about}/>
        <Route path='/meal-suggestions' element={<MealSuggestionsPage />} />
         </Routes>
         <Footer />
    </Router>
    </>
  );
}

export default App;
