import React from 'react';

const Navbar = () => {
    return (
        <header className='w-full fixed top-0 left-0 z-50 bg-black border-b border-gray-800'>
            <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
                <div className='text-xl font-bold tracking-tight text-white'>
                    StartupStudio
                </div>

                <nav className='space-x-2 md:block hidden'>
                    <a href='#home' className='text-sm text-gray-400 bg-black hover:bg-gray-800 rounded-md px-3 py-2 hover:text-white'>
                        Home
                    </a>
                    <a href='#services' className='text-sm text-gray-400 bg-black hover:bg-gray-800 rounded-md px-3 py-2 hover:text-white'>
                        Services
                    </a>
                    <a href='#process' className='text-sm text-gray-400 bg-black hover:bg-gray-800 rounded-md px-3 py-2 hover:text-white'>
                        Process
                    </a>
                    <a href='#portfolio' className='text-sm text-gray-400 bg-black hover:bg-gray-800 rounded-md px-3 py-2 hover:text-white'>
                        Portfolio
                    </a>
                    <a href='#pricing' className='text-sm text-gray-400 bg-black hover:bg-gray-800 rounded-md px-3 py-2 hover:text-white'>
                        Pricing
                    </a>
                    <a href='#testimonial' className='text-sm text-gray-400 bg-black hover:bg-gray-800 rounded-md px-3 py-2 hover:text-white'>
                        Testimonials
                    </a>
                    <a href='#faq' className='text-sm text-gray-400 bg-black hover:bg-gray-800 rounded-md px-3 py-2 hover:text-white'>
                        FAQ
                    </a>
                    <a href='#contact' className='text-sm text-gray-400 bg-black hover:bg-gray-800 rounded-md px-3 py-2 hover:text-white'>
                        Contact
                    </a>
                </nav>

                <div>
                    <button className='bg-black text-gray-400 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-800 hover:text-white transition hidden md:inline-block'>
                        Log in
                    </button>
                    <button className='ml-2 bg-white text-black px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-300 transition hidden md:inline-block'>
                        Sign up
                    </button>
                </div>
                
            </div>
        </header>
    );
}

export default Navbar;