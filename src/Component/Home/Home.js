import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Join from '../Join/Join';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Join></Join>
            <Footer></Footer>
        </div>
    );
};

export default Home;