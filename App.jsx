import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css'

import Master from './layout/Master'
import Home from './Home'
import About from './components/About'
import AdminMaster from './layout/AdminMaster'
import Dashboard from './components/Dashboard'
import Counter from './components/Counter'
import Login from './components/Login'
import Register from './components/Register';
import Services from '../Services';
import Portfolio from '../Portfolio';
import Pricing from '../Pricing';
import Blog from '../Blog';
import Contact from '../Contact';
import AddCategory from './components/AddCategory';
import ManageCategory from './components/ManageCategory';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>

        {/* Public pages */}
        <Route path='/' element={<Master/>}>
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='counter' element={<Counter/>} />
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path='services' element={<Services/>} />
            <Route path='portfolio' element={<Portfolio/>} />
            <Route path='pricing' element={<Pricing/>} />
            <Route path='blog' element={<Blog/>} />
            <Route path='contact' element={<Contact/>} />
        </Route>

        {/* Admin pages */}
        <Route path='/admin' element={<AdminMaster/>}>
            <Route index element={<Dashboard/>} />
            <Route path='addCategory' element={<AddCategory/>} />
            <Route path='manageCategory' element={<ManageCategory/>} />
        </Route>

      </Routes>

      <ToastContainer />
    </BrowserRouter>
  )
}
