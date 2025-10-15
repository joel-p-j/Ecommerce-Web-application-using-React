
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { AuthProvider } from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'
import ProtectedAdminRoute from './Components/ProtectedAdminRoute'
import Admin from './Pages/Admin'
import MainLayout from './Components/MainLayout'
import { ProductProvider } from './Context/ProductContext'
import CategoryPage from './Components/CategoryPage'
import Contact from './Pages/Contact'
import Checkout from './Pages/Checkout'
import Cart from './Pages/Cart'
import Payment from './Pages/Payment'
import { CartProvider } from './Context/CartContext'

function App() {

  return (
    <>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
             <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/' element={<ProtectedRoute><MainLayout><Home/></MainLayout> </ProtectedRoute>}></Route>
              <Route path='category/:categoryName' element={<MainLayout><CategoryPage/></MainLayout>}></Route>
              <Route path='/admin' element={<ProtectedAdminRoute><Admin/></ProtectedAdminRoute>} />
              <Route path='/contact' element={<MainLayout><Contact/></MainLayout>}></Route>
              <Route path='/checkout' element={<MainLayout><Checkout/></MainLayout>}></Route>
              <Route path='/cart' element={<MainLayout><Cart/></MainLayout>}></Route>
              <Route path='/payment' element={<MainLayout><Payment/></MainLayout>}></Route>

            </Routes>
            </CartProvider>
      </ProductProvider>
    

    </AuthProvider>
     
    

    </>
  )
}

export default App
