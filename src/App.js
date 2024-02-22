import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './containers/ProductDetails';
import ProductList from './containers/ProductList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

// Create a NotFound component for the 404 route
function NotFound() {
  return <div>Not found 404</div>;
}

export default App;
