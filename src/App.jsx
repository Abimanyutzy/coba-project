import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Company from './pages/Company';
import Shop from './pages/Shop';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;