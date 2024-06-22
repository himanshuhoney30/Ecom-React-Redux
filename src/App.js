import './App.css';
import Cards from './Components/Cards';
import CartPage from './Components/CartPage';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      {/* <CartPage/> */}
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/Cart' element={<CartPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
