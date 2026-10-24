import { Route, Routes } from 'react-router-dom'
import { Body } from './components/Body'
import { Login } from './components/Login'
import {Profile} from './components/Profile'
import './App.css'

function App() {
  return (
    <div className='flex flex-col h-screen'>
    <Routes>
      <Route path='/' element={<Body/>}>
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
