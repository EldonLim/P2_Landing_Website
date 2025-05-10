import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    ctaText1: string;
    ctaText2?: string;
    onCtaClick1?: () => void;
    onCtaClick2?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText1, ctaText2, onCtaClick1, onCtaClick2 }) => {
    return (
        <div className="py-20 lg:py-50 xl:pl-80 lg:pl-30 pl-10 pr-10 md:pl-20 md:pl-20">
            <motion.div
                initial={{opacity: 0, y: -90}}
                animate={{opacity: 1, y: 0}}
                transition={{duration:0.6, ease: 'easeOut'}}
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mr-50 lg:mr-40 xl:mr-100 sm:mr-50">{title}</h1>
                <p className='lg:text-2xl md:text-xl text-sm text-gray-300 mr-0 md:mr-50 xl:mr-200 lg:mr-100 mb-10'>{subtitle}</p>
                <button
                    onClick={onCtaClick1}
                    className='bg-white text-black hover:bg-gray-300 text-md rounded-xl mr-6 px-4 py-2'
                >
                    {ctaText1}
                </button>
                <button
                    onClick={onCtaClick2}
                    className='text-white rounded-xl text-md px-0 lg:px-4 py-2 hover:bg-gray-900'
                >
                    {ctaText2}
                </button>
            </motion.div>
        </div>
    );
}

export default HeroSection;