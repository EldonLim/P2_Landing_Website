import React from 'react';
import Hero from '../sections/Hero';
import Navbar from '../components/Navbar';
import Services from '../sections/Services';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className='pt-20'>
                <Hero />
                <Services />

            </main>
        </>
    )
}

export default Home;