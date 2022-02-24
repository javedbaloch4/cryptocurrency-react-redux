import React from 'react'
import { Link, Route, Routes} from 'react-router-dom';
import { Typography, Space, Layout } from 'antd'

import { Navbar, Footer, Homepage, Exchanges, CryptoDetails, Cryptocurrencies } from './components'
import './App.css'

function App() {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
          <Layout>
          <div className="routes">
                <Routes>
                  <Route index element={<Homepage />} />
                  <Route path="exchanges" element={<Exchanges />} />
                  <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
                  <Route path="cryptodetails" element={<CryptoDetails />} />
                </Routes>
              </div>
            </Layout>
            <div className="footer" level={5} style={{ color: 'white', textAlign: 'center' }}>
              <Typography.Title>
                Cryptoverse <br />
                All rights reserverd
              </Typography.Title>
              <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
              </Space>
            </div>
        </div>
    </div>
  )
}

export default App