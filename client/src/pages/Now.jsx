
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBook, FaSpotify } from 'react-icons/fa';
import MagneticButton from '../components/MagneticButton';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Now = () => {
    return (
        <div className="min-h-screen bg-[#050608] text-gray-300 font-sans selection:bg-[#0055FF] selection:text-white py-24">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <div className="mb-20">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors">
                        <FaArrowLeft /> Back to Home
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white">What I'm doing now</h1>
                        <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                        </span>
                    </motion.div>
                    <p className="text-gray-500 mt-4 text-lg">Updated Feb 12, 2026</p>
                </div>

                <div className="grid gap-12 relative border-l border-white/10 pl-8 md:pl-12">

                    {/* 1. Building */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 bg-[#050608] border border-gray-600 rounded-full flex items-center justify-center text-xs text-gray-400">
                            <FaLaptopCode />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Building</h2>
                        <div className="bg-[#111] p-6 rounded-xl border border-white/10 hover:border-[#0055FF]/50 transition-all group">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-lg text-white group-hover:text-[#0055FF] transition-colors">AnarchyBay v2.0</h3>
                                <span className="text-xs font-mono text-[#0055FF] bg-[#0055FF]/10 px-2 py-1 rounded">High Priority</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">Refactoring the core engine to use Microservices architecture.</p>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                                <div className="bg-[#0055FF] h-2 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                            <div className="flex justify-end mt-1">
                                <span className="text-xs font-mono text-gray-500">45% Complete</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Learning */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 bg-[#050608] border border-gray-600 rounded-full flex items-center justify-center text-xs text-gray-400">
                            <FaBook />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Learning</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-[#111] p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-10 h-10 bg-orange-500/20 rounded flex items-center justify-center text-orange-500 font-bold">R</div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Rust Programming</h3>
                                    <p className="text-xs text-gray-500">Systems Programming</p>
                                </div>
                            </div>
                            <div className="bg-[#111] p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-white font-bold">N</div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Next.js 15</h3>
                                    <p className="text-xs text-gray-500">Server Actions</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Listening */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 bg-[#050608] border border-gray-600 rounded-full flex items-center justify-center text-xs text-gray-400">
                            <FaSpotify />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Listening</h2>
                        <div className="bg-[#1db954]/10 border border-[#1db954]/20 p-4 rounded-xl flex items-center gap-4">
                            <div className="w-16 h-16 bg-[#111] rounded shadow-lg flex items-center justify-center text-[#1db954]">
                                <FaSpotify size={32} />
                            </div>
                            <div>
                                <p className="text-xs text-[#1db954] font-bold uppercase tracking-widest mb-1">On Rotation</p>
                                <h3 className="font-bold text-white">Coding Focus</h3>
                                <p className="text-sm text-gray-400">Deep Work & Flow State</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Now;
