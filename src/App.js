import React from 'react';
import './App.css';
// import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';

function App() {
 return(
   <div className="App">
    <Home/>
    <Hero/>
    <Quiz/>
    {/* <Footer/> */}
   </div>
 );
}

export default App;
