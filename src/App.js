import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/common.scss'
import Header from './components/Header'
import Main from './components/Main'



//portfolio link//
import Modivoa from './ListPages/001_Modivoa'
import Oncheon from './ListPages/002_Oncheon'
import Sososai from './ListPages/003_Sososai'
import Prime from './ListPages/004_Prime'
import Songaree from './ListPages/005_Songaree'
import Namkwang from './ListPages/006_Namkwang'
import Usm from './ListPages/007_Usm'
import Tamburins from './ListPages/008_Tamburins'
import Nasa from './ListPages/009_Nasa'
import HM from './ListPages/010_H&M'
import Louvre from './ListPages/011_Louvre'
import Sealife from './ListPages/012_Sealife'






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