import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUsPage';
import IndiaPage from './pages/IndiaPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/india" element={<IndiaPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
