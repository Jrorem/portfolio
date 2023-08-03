import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import './assets/css/styles.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import background from "../src/assets/images/background.2d300d3903fdeffdb817.jpg"



function App() {
  return (
    <HashRouter>
    <div class="App" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh'}}>  
    <Header/>  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
      <Footer/>
      
    </div>
    </HashRouter>
  );
}



export default App;
