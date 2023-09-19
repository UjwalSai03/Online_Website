import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Menu from './pages/Menu'
import About from './components/About';
import Contact from './components/Contact'
 
function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Routes>
            <Route exact path = '/' element = {<Home />}/>
            <Route exact path = '/menu' element = {<Menu />}/>
            <Route exact path = '/about' element = {<About />}/>
            <Route exact path = '/contact' element = {<Contact />}/>
          </Routes>
          <Footer />

          
      </div>
    </Router>
  );
}

export default App;
