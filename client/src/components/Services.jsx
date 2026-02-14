import { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../constants';
import { FaCode, FaPaintBrush, FaServer, FaShoppingCart, FaMicrochip, FaSpinner } from 'react-icons/fa';

const iconMap = {
    FaCode: FaCode,
    FaPaintBrush: FaPaintBrush,
    FaServer: FaServer,
    FaShoppingCart: FaShoppingCart
};

const Services = () => {
    // 1. State for the loading sequence
    const [isInitializing, setIsInitializing] = useState(false);

    const handleInitialization = () => {
        setIsInitializing(true);

        // 2. Simulate "System Processing" for 2.5 seconds
        setTimeout(() => {
            setIsInitializing(false);
            window.location.href = 'mailto:yourname@email.com?subject=Project Initialization Request';
        }, 2500);
    };

    return (
        <section id="services" className="py-32 bg-[#050608] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#0055FF 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-2 mb-4">
                            <FaMicrochip className="text-[#0055FF] animate-pulse" />
                            <span className="text-[#0055FF] font-mono text-[10px] tracking-[0.4em] uppercase">System_Capabilities.v2</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055FF] to-cyan-400">Services.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative p-8 bg-[#0a0c10] border border-white/5 hover:border-[#0055FF]/40 transition-all duration-500 overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-12 relative z-10">
                                    <div className="p-3 bg-white/5 border border-white/5 text-2xl text-gray-500 group-hover:text-[#0055FF] transition-all duration-500">
                                        {Icon && <Icon />}
                                    </div>
                                    <span className="font-mono text-[10px] text-gray-600">[ 0{index + 1} ]</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase group-hover:text-[#0055FF] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed font-mono">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* --- UPGRADED CALL TO ACTION --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0a0c10]/50 backdrop-blur-sm relative overflow-hidden"
                >
                    {/* Progress Bar (Visual feedback when loading) */}
                    {isInitializing && (
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2.5, ease: "linear" }}
                            className="absolute top-0 left-0 h-[2px] bg-[#0055FF] z-20 shadow-[0_0_10px_#0055FF]"
                        />
                    )}

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border border-[#0055FF]/30 flex items-center justify-center">
                            <div className={`w-2 h-2 bg-[#0055FF] rounded-full ${isInitializing ? 'animate-ping' : 'animate-pulse'}`} />
                        </div>
                        <div className="font-mono text-xs">
                            <p className="text-gray-400 uppercase tracking-widest">
                                {isInitializing ? "Processing Request..." : "System Ready // Waiting for input"}
                            </p>
                            {isInitializing && <p className="text-[#0055FF] mt-1">SECURE_HANDSHAKE_IN_PROGRESS</p>}
                        </div>
                    </div>

                    <button
                        onClick={handleInitialization}
                        disabled={isInitializing}
                        className={`relative px-10 py-4 font-black text-xs tracking-widest uppercase transition-all duration-300 min-w-[240px] flex items-center justify-center gap-3
                            ${isInitializing 
                                ? "bg-gray-800 text-gray-400 cursor-wait shadow-none" 
                                : "bg-white text-black hover:bg-[#0055FF] hover:text-white shadow-[4px_4px_0px_#0055FF] active:translate-x-1 active:translate-y-1 active:shadow-none"
                            }`}
                    >
                        <AnimatePresence mode="wait">
                            {isInitializing ? (
                                <motion.div 
                                    key="loading"
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <FaSpinner className="animate-spin" />
                                    <span>Syncing...</span>
                                </motion.div>
                            ) : (
                                <motion.span 
                                    key="normal"
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Initialize Collaboration
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;