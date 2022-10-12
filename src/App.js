import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/common.scss'
import Header from './components/Header'
import Main from './components/Main'




const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App