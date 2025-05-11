export default function ProcessSection() {
    const steps = [
        { emoji: '📞', title: 'Discovery Call', desc: 'We understand your idea.' },
        { emoji: '🧠', title: 'Planning & Strategy', desc: 'Define scope, timeline, and tools.' },
        { emoji: '🎨', title: 'Design', desc: 'Build mockups and UI/UX.' },
        { emoji: '🛠️', title: 'Development', desc: 'Build the core features fast.' },
        { emoji: '🚀', title: 'Launch & Handoff', desc: 'You get a working product and full control.' },
    ];

    return (
        <section id="process" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">How It Works</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
                {steps.map((step, index) => (
                    <div key={index} className="border border-cyan-300 rounded-2xl p-6 shadow-lg shadow-cyan-500/50 hover:shadow-xl transition">
                        <div className="text-4xl mb-2">{step.emoji}</div>
                        <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                        <p className="text-gray-400">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}