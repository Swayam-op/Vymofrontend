import './App.css';
import Home from './Pages/Home';
import MerchantRegistation from './Pages/MerchantRegistation';
import Root from './Pages/Root';
import { Routes, Route } from 'react-router-dom';
import ShowMerchantDetails from './Pages/ShowMerchantDetails';
function App() {
  return (
    <div className='w-full h-full bg-solid-dark-2' >
    <Routes>
    <Route path='/' element={<Root/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/register' element={<MerchantRegistation/>}></Route>
    <Route path='/showMerchants' element={<ShowMerchantDetails/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
