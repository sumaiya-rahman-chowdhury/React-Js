import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Login  from './pages/Login'
function App() {
  return <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='about' element={<About></About>}></Route>
  <Route path='products' element={<Products></Products>}></Route>
  <Route path='login' element={<Login></Login>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App;
