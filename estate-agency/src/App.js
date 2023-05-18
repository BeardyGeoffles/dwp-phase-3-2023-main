import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import BuyerPage from './pages/BuyerPage';
import BuyerEditPage from './pages/BuyerEditPage';
import PropertyPage from './pages/PropertyPage';
import SellerPage from './pages/SellerPage';
import SellerEditPage from './pages/SellerEditPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navbar />
      <main>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buyer" element={<BuyerPage />} />
            <Route path="/seller" element={<SellerPage />} />
            <Route path="/property" element={<PropertyPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/buyer/:buyerID/edit" element={<BuyerEditPage />} />
            <Route path="/seller/:sellerID/edit" element={<SellerEditPage />} />
        </Routes>
      </main>

      </BrowserRouter>


    </div>
  );
}

export default App;
