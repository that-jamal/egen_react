import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index.tsx';
import './index.css'
import Layout from './components/Layout.tsx'
import Shop from './pages/Shop.tsx'
import Checkout from './pages/Checkout.tsx';


ReactDOM.createRoot(
  document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <Router>
        <Layout>
          <Routes>
            <Route path="/checkout"
              element={<Checkout />} />
            <Route path="/"
              element={<Index />} />
            <Route path="/shop"
              element={<Shop />} />
          </Routes>
        </Layout>
      </Router>
    </React.StrictMode>,
  )
