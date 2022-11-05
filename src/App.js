import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Donors from './Component/Donors/Donors';

function App() {
  return (
    <div className="App  ">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/donor' element={<Donors></Donors>}></Route>
      </Routes>
    </div>
  );
}

export default App;
