
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../constants';

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" ref={ref} className="py-24 bg-[#050608] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-20" />

            <div className="container mx-auto px-6 relative z-10 w-full max-w-5xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 flex flex-col items-center text-center"
                >
                    <span className="text-[#0055FF] font-mono text-xs tracking-[0.3em] uppercase mb-4">
                        // Career.Log
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
                        Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055FF] to-white/50">&</span> Education
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Tech Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#0055FF] md:-translate-x-1/2 origin-top shadow-[0_0_15px_#0055FF] z-10"
                    />

                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`w-full md:w-1/2 p-0 ${index % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right text-left'}`}
                                >
                                    <div className="group relative bg-[#0a0a0a] border border-white/5 p-8 hover:border-[#0055FF]/30 transition-all duration-300">
                                        {/* Corner Accents */}
                                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-[#0055FF] transition-colors"></div>
                                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-[#0055FF] transition-colors"></div>
                                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-[#0055FF] transition-colors"></div>
                                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-[#0055FF] transition-colors"></div>

                                        <span className="text-[#0055FF] font-mono text-xs tracking-widest mb-3 block">
                                            [{exp.year}]
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-[#0055FF] transition-colors">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-6 pb-4 border-b border-white/5">
                                            // {exp.company}
                                        </h4>
                                        <p className="text-gray-500 text-sm leading-relaxed font-mono">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Center Marker */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-[10px] h-[10px] bg-[#050608] border border-[#0055FF] z-20 rotate-45 group h-full">
                                    <div className="absolute inset-0 bg-[#0055FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                {/* Spacer for Timeline Alignment */}
                                <div className="w-full md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
