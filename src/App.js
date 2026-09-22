import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Mpesa from './components/Mpesa';
import Navbar from './components/Navbar';

function App() {
  return (

    <BrowserRouter>
    
    <div className="App">
      
         
          <Navbar/>
        
     
    {/* routes */}
    <Routes>
      <Route path='/addproducts' element={<Addproducts/>}/>
      <Route path='/' element={<Getproducts/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/mpesa' element={<Mpesa/>}/>
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
