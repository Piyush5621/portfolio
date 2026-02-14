import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('HOME');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Basic scroll spy logic
            const sections = ['home', 'about', 'services', 'projects'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section.toUpperCase());
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'ABOUT', href: '#about' },
        { name: 'SERVICES', href: '#services' },
        { name: 'PROJECTS', href: '#projects' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
            scrolled ? 'py-3 bg-[#050608]/80 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
        }`}>
            {/* Top Progress Bar */}
            <motion.div 
                className="absolute top-0 left-0 h-[2px] bg-[#0055FF] z-50 shadow-[0_0_10px_#0055FF]"
                style={{ scaleX: useScrollProgress(), transformOrigin: "0%" }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
                {/* Logo Section */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="w-1 h-8 bg-[#0055FF] group-hover:h-10 transition-all duration-300 shadow-[0_0_15px_#0055FF]"></div>
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0055FF] opacity-0 group-hover:opacity-100 transition-all"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-xl font-black tracking-tighter text-white leading-none">PIYUSH</span>
                        <div className="flex items-center gap-1">
                            <span className="font-mono text-[9px] tracking-[0.3em] text-gray-500 group-hover:text-[#0055FF] transition-colors leading-none uppercase">System.Core</span>
                            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                        </div>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-2 py-1 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`relative px-5 py-2 text-[11px] font-mono font-bold tracking-widest transition-all duration-300 group ${
                                activeSection === link.name ? 'text-white' : 'text-gray-500 hover:text-[#0055FF]'
                            }`}
                        >
                            <span className="relative z-10">
                                {activeSection === link.name ? '> ' : ''}{link.name}
                            </span>
                            {activeSection === link.name && (
                                <motion.span 
                                    layoutId="nav-bg"
                                    className="absolute inset-0 bg-[#0055FF]/10 rounded-full border border-[#0055FF]/20"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <a 
                        href="#contact" 
                        className="relative overflow-hidden px-6 py-3 bg-[#0055FF] text-white text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,85,255,0.4)] flex items-center gap-2 group"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                    >
                        <FaTerminal className="group-hover:rotate-12 transition-transform" />
                        <span>INITIALIZE_COMMS</span>
                        {/* Internal Scan Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden w-10 h-10 flex items-center justify-center text-white border border-white/10 hover:border-[#0055FF] transition-all relative overflow-hidden group"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? <FaTimes key="close" /> : <FaBars key="open" />}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#050608] z-[90] flex flex-col justify-center px-12 gap-6"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
                             <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#0055FF] blur-[120px] rounded-full"></div>
                        </div>

                        {navLinks.map((link, i) => (
                            <motion.a
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={link.name}
                                href={link.href}
                                className="font-mono text-4xl font-black text-gray-700 hover:text-[#0055FF] tracking-tighter flex items-baseline gap-4 group"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-xs text-[#0055FF] font-mono opacity-50">0{i + 1}</span>
                                <span className="group-hover:translate-x-4 transition-transform duration-300">
                                    {link.name}
                                </span>
                            </motion.a>
                        ))}

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 pt-8 border-t border-white/5"
                        >
                            <a
                                href="#contact"
                                className="inline-block font-mono text-lg font-bold text-white bg-[#0055FF] px-8 py-4 hover:shadow-[0_0_20px_#0055FF] transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                START_CONNECTION_
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// Custom hook for scroll progress
function useScrollProgress() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const updateScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setProgress(currentScrollY / scrollHeight);
            }
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);
    return progress;
}

export default Navbar;