import React from 'react';
import Hero from '../sections/Hero';
import Navbar from '../components/Navbar';
import Services from '../sections/Services';
import Process from '../sections/Process';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className='pt-20'>
                <Hero />
                <Services />
                <Process />

            </main>
        </>
    )
}

export default Home;