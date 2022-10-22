import { Form } from 'react-router-dom'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Childrens from './pages/childrens'
import Costume from './pages/costume'
import Mainstage from './pages/mainstage'
import Membership from './pages/membership'
import Volunteers from './pages/volunteers'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deegan_childrens_theater" element={<Childrens />} />
        <Route path="/costume_shoppe" element={<Costume />} />
        <Route path="/mainstage" element={<Mainstage />} />
        <Route path="/memnership" element={<Membership />} />
        <Route path="/volunteers" element={<Volunteers />} />
      </Routes>
    </div>
  )
}

export default App
