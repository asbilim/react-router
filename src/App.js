import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import About from './pages/About';
import Error from './pages/Error';
import Layout from './pages/Layout';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct/>} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
