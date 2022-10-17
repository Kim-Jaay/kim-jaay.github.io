import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/common.scss'
import Header from './components/Header'
import Main from './components/Main'
import SubPageBanner from './components/SubPageBanner'





const App = () => {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

  }, []);
  return (
    <div className="wrap">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<SubPageBanner />} />
      </Routes>

    </div>
  )
}

export default App