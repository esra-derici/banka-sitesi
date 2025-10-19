import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Anasayfa from './pages/Anasayfa'
import Hakkımızda from './pages/Hakkımızda'
import BireyselHizmetler from './pages/BireyselHizmetler'
import GirisSayfaları from './pages/GirisSayfaları'
import GuvenlikGizlilik from './pages/GuvenlikGizlilik'
import IletisimDestek from './pages/IletisimDestek'
import InternetMobilBankacılık from './pages/InternetMobilBankacılık'
import KampanyalarDuyurular from './pages/KampanyalarDuyurular'
import KariyerInsanKanakları from './pages/KariyerInsanKanakları'
import KumsalHizmetler from './pages/KurumsalHizmetler'
import SıkSorulanSorular from './pages/SıkSorulanSorular'


const App = () => {

  return (
    <Router>
      <Navbar/>

        <Routes>
           <Route path='/' element={<Anasayfa />}/>
           <Route path='/hakkimizda' element={<Hakkımızda />}/>
           <Route path='/bireysel-hizmetler' element={<BireyselHizmetler />}/>
           <Route path='/kurumsal-hizmetler' element={<KumsalHizmetler />}/>
           <Route path='/kampanyalar' element={<KampanyalarDuyurular />}/>
           <Route path='/iletisim' element={<IletisimDestek />}/>
           <Route path='/giris' element={<GirisSayfaları/>}/>
           <Route path='/guvenlik' element={<GuvenlikGizlilik />}/>
           <Route path='/dijital-bankacilik' element={<InternetMobilBankacılık />}/>
           <Route path='/kariyer' element={<KariyerInsanKanakları/>}/>
           <Route path='/sss' element={<SıkSorulanSorular/>}/>
        </Routes>

      <Footer/>
    </Router>
  )
}

export default App

