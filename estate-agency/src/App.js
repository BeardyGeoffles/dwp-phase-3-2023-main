import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import BookingEditPage from './pages/BookingEditPage';
import BuyerPage from './pages/BuyerPage';
import BuyerEditPage from './pages/BuyerEditPage';
import PropertyPage from './pages/PropertyPage';
import PropertyEditPage from './pages/PropertyEditPage';
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
            <Route path="/property/:propertyID/edit" element={<PropertyEditPage />} />
            <Route path="/booking/:id/edit" element={<BookingEditPage /> } />
        </Routes>
      </main>

      </BrowserRouter>


    </div>
  );
}

export default App;
