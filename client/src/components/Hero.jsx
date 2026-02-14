import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaTerminal, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 60, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 60, damping: 20 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 30;
        const moveY = (clientY - window.innerHeight / 2) / 30;
        x.set(moveX);
        y.set(moveY);
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    const openContact = () => window.location.href = 'mailto:yourname@email.com';

    return (
        <section
            id="home"
            className="relative h-screen w-full overflow-hidden bg-[#050608] flex items-center font-sans select-none"
            onMouseMove={handleMouseMove}
        >
            {/* --- 1. DYNAMIC BACKGROUND ART --- */}
            {/* Photo: Increased brightness (0.3 -> 0.6) and opacity (60 -> 80) for better visibility */}
            <motion.div
                style={{ x: mouseXSpring, y: mouseYSpring }}
                className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none"
            >
                <div className="relative w-full md:w-[60vw] h-full overflow-hidden">
                    <img
                        src="/images/Profile.jpg"
                        alt="Piyush Kumar Portrait"
                        className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.6] opacity-80 transition-all duration-700"
                    />
                    {/* Softer Gradient: Face stays clearer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/20" />
                </div>
            </motion.div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 z-10 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1.5px,transparent_1.5px)] [background-size:45px_45px]" />
            </div>

            {/* --- 2. THE PK SIDEBAR --- */}
            <div className="hidden lg:flex flex-col justify-between items-center absolute left-0 top-0 bottom-0 w-20 z-50 border-r border-white/5 bg-[#050608]/80 backdrop-blur-md py-12">
                {/* Fixed PK Logo Button */}
                <button 
                    onClick={scrollToTop}
                    className="font-black text-2xl text-white tracking-tighter hover:text-[#0055FF] transition-all active:scale-90"
                >
                    P<span className="text-[#0055FF]">K</span>
                </button>

                <div className="flex flex-col gap-8 text-gray-500">
                    {[
                        { Icon: FaGithub, link: "#" },
                        { Icon: FaLinkedin, link: "#" },
                        { Icon: FaTwitter, link: "#" }
                    ].map((item, i) => (
                        <a 
                            key={i} 
                            href={item.link} 
                            className="hover:text-[#0055FF] hover:scale-125 transition-all duration-300"
                        >
                            <item.Icon size={18} />
                        </a>
                    ))}
                </div>
                
                {/* Vertical Line Decoration */}
                <div className="h-24 w-px bg-gradient-to-t from-[#0055FF] to-transparent opacity-50" />
            </div>

            {/* --- 3. MAIN UI CONTENT --- */}
            <div className="container mx-auto px-6 md:px-24 lg:px-32 relative z-40">
                <div className="max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#0055FF] animate-pulse" />
                        <span className="font-mono text-[10px] tracking-[0.4em] text-[#0055FF] uppercase">
                            Connection.Established
                        </span>
                    </motion.div>

                    <h1 className="text-[5rem] md:text-[8rem] lg:text-[11rem] font-black text-white leading-[0.8] tracking-tighter">
                        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="block text-gray-400/80">
                            PIYUSH
                        </motion.span>
                        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="block relative">
                            KUMAR<span className="text-[#0055FF]">.</span>
                        </motion.span>
                    </h1>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex flex-col md:flex-row gap-12 md:items-center"
                    >
                        <div className="max-w-[300px] border-l border-[#0055FF] pl-6 py-1">
                            <p className="text-gray-400 text-sm font-medium leading-relaxed italic">
                                Specializing in <span className="text-white">Full-Stack Architecture</span> and high-performance digital systems.
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <button 
                                onClick={scrollToProjects}
                                className="group relative px-10 py-4 bg-[#0055FF] text-white font-black text-[10px] tracking-[0.2em] uppercase overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,85,255,0.4)] active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Project_Log <FaExternalLinkAlt size={10} />
                                </span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-difference" />
                            </button>
                            
                            <button 
                                onClick={openContact}
                                className="group flex items-center gap-3 text-gray-500 hover:text-white transition-all font-mono text-[10px] tracking-widest uppercase"
                            >
                                <FaTerminal className="text-[#0055FF]" />
                                <span className="border-b border-transparent group-hover:border-[#0055FF]">Initialize_Chat</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative HUD Elements */}
            <div className="absolute bottom-10 right-12 flex flex-col items-center gap-4 text-gray-700 pointer-events-none z-40">
                <span className="text-[8px] font-mono tracking-[0.5em] uppercase [writing-mode:vertical-rl]">Navigate</span>
                <FaChevronDown size={10} className="text-[#0055FF] animate-bounce" />
            </div>
        </section>
    );
};

export default Hero;