import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import Banner from './Component/Banner/Banner';
import Header from './Component/Header/Header';
import Service from './Component/Service/Service';
import Join from './Component/Join/Join';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Service></Service>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;
