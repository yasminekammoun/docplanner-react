import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Docpatcard from './Docpatcard';
import Icons from './Icons';
import Blocs from './Blocs';
import Countrycard from './Countrycard'
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Header />
       <Docpatcard/>
       <Icons/>
       <Blocs/>
       <Countrycard/>
       <Footer/>
    </div>
   
   );
}
 
export default App;