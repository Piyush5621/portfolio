import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaTerminal, FaCodeBranch } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiNextdotjs, SiCplusplus, SiFigma } from 'react-icons/si';

// --- Interactive Wrapper for Bento Items ---
const BentoItem = ({ children, className = "", span = "" }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
                ${span} relative overflow-hidden 
                bg-[#0a0a0c] border border-white/5 
                rounded-xl group transition-colors duration-500
                hover:border-[#0055FF]/30 ${className}
            `}
        >
            <div style={{ transform: "translateZ(20px)" }} className="relative z-10 w-full h-full">
                {children}
            </div>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-32 bg-[#020203] relative overflow-hidden">
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0055FF]/20 to-transparent" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0055FF]/10 blur-[120px] rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                {/* 1. Enhanced Header */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FaCodeBranch className="text-[#0055FF] animate-pulse" />
                            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">Identity_Manifest</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0055FF] to-[#0033aa]">ENGINEER.</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="font-mono text-[10px] text-gray-600 leading-tight uppercase">
                            Architecture // Performance<br/>
                            Interaction // Logic
                        </p>
                    </div>
                </div>

                {/* 2. Advanced Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">

                    {/* Portrait Module */}
                    <BentoItem span="md:col-span-1 md:row-span-2">
                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img 
                                src="/images/Profile.jpg" 
                                alt="Piyush" 
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent" />
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <p className="text-white font-black text-2xl tracking-tighter leading-none">PIYUSH<br/>KUMAR</p>
                            <span className="text-[10px] font-mono text-[#0055FF] mt-2 block">@fullstack_dev</span>
                        </div>
                    </BentoItem>

                    {/* Bio Module */}
                    <BentoItem span="md:col-span-2 md:row-span-1" className="p-8">
                        <FaTerminal className="text-[#0055FF] mb-4 opacity-50" />
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I specialize in <span className="text-white">scalable backend architectures</span> and high-fidelity frontends. 
                            Focused on merging technical efficiency with aesthetic precision.
                        </p>
                    </BentoItem>

                    {/* Status/Exp Module */}
                    <BentoItem span="md:col-span-1" className="p-8 flex flex-col justify-between border-l-4 border-l-[#0055FF]">
                        <span className="font-mono text-[10px] text-gray-500">SYSTEM_UPTIME</span>
                        <div>
                            <span className="text-5xl font-black text-white">02+</span>
                            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">Years Coding</p>
                        </div>
                    </BentoItem>

                    {/* Tech Stack Module */}
                    <BentoItem span="md:col-span-3" className="p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">// Technical_Arsenal</h4>
                            <div className="flex gap-1">
                                {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-[#0055FF] rounded-full animate-pulse" />)}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-6">
                            {[
                                { Icon: FaReact, name: "React" },
                                { Icon: SiNextdotjs, name: "Next" },
                                { Icon: FaNodeJs, name: "Node" },
                                { Icon: SiTailwindcss, name: "Tailwind" },
                                { Icon: SiMysql, name: "SQL" },
                                { Icon: FaJava, name: "Java" },
                                { Icon: FaPython, name: "Python" },
                                { Icon: SiCplusplus, name: "C++" },
                                { Icon: SiFigma, name: "Figma" },
                            ].map((tech, i) => (
                                <div key={i} className="group/icon flex flex-col items-center gap-2">
                                    <tech.Icon size={28} className="text-gray-600 group-hover/icon:text-[#0055FF] group-hover/icon:-translate-y-1 transition-all duration-300" />
                                    <span className="text-[8px] font-mono text-gray-700 opacity-0 group-hover/icon:opacity-100 transition-opacity uppercase">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </BentoItem>

                </div>
            </div>
        </section>
    );
};

export default About;