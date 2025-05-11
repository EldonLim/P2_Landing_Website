import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setIsOpen(false);
    }

    return (
        <header className='w-full fixed top-0 left-0 z-50 bg-black border-b border-gray-800'>
            <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
                <div className='text-xl font-bold tracking-tight text-white'>
                    StartupStudio
                </div>

                {/* Desktop Nav */}
                <nav className='space-x-2 xl:block hidden'>
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

                <div className='hidden xl:block'>
                    <button className='bg-black text-gray-400 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-800 hover:text-white transition hidden md:inline-block'>
                        Log in
                    </button>
                    <button className='ml-2 bg-white text-black px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-300 transition hidden md:inline-block'>
                        Sign up
                    </button>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="xl:hidden focus:outline-none"
                >
                    {isOpen? <X size={24} /> : <Menu size={24} color={'red'}/>}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='top-full absolute left-0 w-full bg-black shadow-lg shadow-cyan-500/50 flex flex-col items-center p-4 gap-4 xl:hidden'>
                        <a href='#home' className={`text-xl md:text-3xl ${activeLink === '#home' ? 'border-b border-cyan-500' : ''}`} 
                        onClick={() => handleLinkClick('#home')}>Home</a>
                        <a href='#services' className={`text-xl md:text-3xl ${activeLink === '#services' ? 'border-b border-cyan-500' : ''}`} 
                        onClick={() => handleLinkClick('#services')}>Services</a>
                        <a href='#process' className={`text-xl md:text-3xl ${activeLink === '#process' ? 'border-b border-cyan-500' : ''}`} 
                        onClick={() => handleLinkClick('#process')}>Process</a>
                        <a href='#portfolio' className={`text-xl md:text-3xl ${activeLink === '#portfolio' ? 'border-b border-cyan-500' : ''}`} 
                        onClick={() => handleLinkClick('#portfolio')}>Portfolio</a>
                        <a href='#pricing' className={`text-xl md:text-3xl ${activeLink === '#pricing' ? 'border-b border-cyan-500' : ''}`} 
                        onClick={() => handleLinkClick('#pricing')}>Pricing</a>
                        <a href='#testimonial' className={`text-xl md:text-3xl ${activeLink === '#testimonial' ? 'border-b border-cyan-500' : ''}`} 
                        onClick={() => handleLinkClick('#testimonial')}>Testimonials</a>
                        <a href='#faq' className={`text-xl md:text-3xl ${activeLink === '#faq' ? 'border-b border-cyan-500' : ''}`} 
                        onClick={() => handleLinkClick('#faq')}>FAQ</a>
                        <a href='#contact' className={`text-xl md:text-3xl ${activeLink === '#contact' ? 'border-b border-cyan-500' : ''}`} 
                        onClick={() => handleLinkClick('#contact')}>Contact</a>
                    </div>
                )}
                
            </div>
        </header>
    );
}

export default Navbar;