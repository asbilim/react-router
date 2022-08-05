import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route  path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} /> 
        <Route  path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;
