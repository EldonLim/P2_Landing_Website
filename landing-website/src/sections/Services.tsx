import ServiceCard from '../components/ServiceCard';

const services = [
    {
        title: "MVP Development",
        description: "Launch with just the essentials."
    },
    {
        title: "Custom Websites & Web Apps",
        description: "Designed and developed fast."
    },
    {
        title: "Mobile App Prototypes",
        description: "iOS, Android, or Flutter-based."
    },
    {
        title: "UI/UX Design",
        description: "Clean, usable, and conversion-optimized."
    },
    {
        title: "Tech Consulting",
        description: "Choose the right tools and architecture."
    },
    {
        title: "Ongoing Support & Iteration",
        description: "We grow with your product."
    },
];

const Services = () => {
    return (
        <section className='py-20 px-4'>
            <div className='text-center mx-auto'>
                <h2 className='text-4xl font-bold text-white mb-4'>
                    What We Build
                </h2>
                <p className='text-gray-400 text-lg mb-12'>
                    Everything you need to turn an idea into reality.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;