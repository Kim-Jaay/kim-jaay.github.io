import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/common.scss'
import Header from './components/Header'
import Main from './components/Main'



//portfolio link//
import Modivoa from './ListPages/Modivoa'
import Oncheon from './ListPages/Oncheon'
import Sososai from './ListPages/Sososai'
import Prime from './ListPages/Prime'
import Songaree from './ListPages/Songaree'
import Namkwang from './ListPages/Namkwang'
import Usm from './ListPages/Usm'
import Tamburins from './ListPages/Tamburins'
import Nasa from './ListPages/Nasa'
import HM from './ListPages/H&M'
import Louvre from './ListPages/Louvre'
import Sealife from './ListPages/Sealife'






const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/modi' element={<Modivoa />} />
        <Route path='/oncheon' element={<Oncheon />} />
        <Route path='/soso' element={<Sososai />} />
        <Route path='/prime' element={<Prime />} />
        <Route path='/song' element={<Songaree />} />
        <Route path='/nam' element={<Namkwang />} />
        <Route path='/usm' element={<Usm />} />
        <Route path='/tamburins' element={<Tamburins />} />
        <Route path='/nasa' element={<Nasa />} />
        <Route path='/hm' element={<HM />} />
        <Route path='/louvre' element={<Louvre />} />
        <Route path='/sealife' element={<Sealife />} />
      </Routes>
    </div>
  )
}

export default App