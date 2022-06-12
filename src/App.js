import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Footer from './components/Footer';
import {useState} from 'react'
import ScrollToTop from './components/ScrollToTop';
function App() {
  const [selectedItem, setSelectedItem] = useState('shoeOne');
  
  return (
    <>
    <Router>
    <Navbar/>
    <ScrollToTop/>
      <Routes>
          <Route  path='/' exact element={<Home setSelectedItem={setSelectedItem}/>} />
          <Route path='/products' element={<Products  item={selectedItem}/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
