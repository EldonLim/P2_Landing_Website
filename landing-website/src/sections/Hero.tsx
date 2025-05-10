import React from 'react';
import HeroSection from '../components/HeroSection';

const Hero: React.FC = () => {
    return (
        <section id='hero'>
            <HeroSection
                title='Turn Your Idea Into a Product — Fast.'
                subtitle='We help entrepreneurs and businesses bring their ideas to life through rapid, high-quality prototypes, apps, and websites. From concept to clickable, we’ve got you covered.'
                ctaText1='Let’s Build Together!'
                ctaText2='Book a Free Consultation >'
            />
        </section>
    )
}

export default Hero;