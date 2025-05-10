import {motion} from 'framer-motion';
import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({title, description}) => {
    return (
        <motion.div 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.2}}
            // viewport={{once: true}} uncomment if only want show animation once
            className='border border-cyan-300 rounded-xl p-6 shadow-lg shadow-cyan-500/50 hover:bg-gray-900 transition'
            >
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='text-sm text-gray-300'>{description}</p>
        </motion.div>
    );
}

export default ServiceCard;