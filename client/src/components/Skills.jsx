import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../constants';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPhp, FaJava, FaPython, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiCplusplus, SiC, SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiLinux, SiExpress, SiFramer } from 'react-icons/si';

const iconMap = {
    "HTML5": FaHtml5, "CSS3": FaCss3Alt, "JavaScript": FaJs, "React.js": FaReact,
    "Next.js": SiNextdotjs, "Node.js": FaNode, "Tailwind CSS": SiTailwindcss,
    "PHP": FaPhp, "MySQL": SiMysql, "Java": FaJava, "Python": FaPython,
    "C": SiC, "C++": SiCplusplus, "Git": FaGitAlt, "Docker": FaDocker,
    "AWS": FaAws, "TypeScript": SiTypescript, "MongoDB": SiMongodb,
    "PostgreSQL": SiPostgresql, "Redis": SiRedis, "Linux": SiLinux,
    "Express": SiExpress, "Framer Motion": SiFramer
};

const DefaultIcon = FaDatabase;

const SkillCard = ({ name, large = false, index }) => {
    const Icon = iconMap[name] || DefaultIcon;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                relative overflow-hidden group p-[1px]
                ${large ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}
            `}
        >
            {/* Animated Border Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#0055FF]/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            
            <div className="relative w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center p-4 border border-white/5 group-hover:border-[#0055FF]/30 transition-all duration-500">
                
                {/* Background Decor: Binary/Grid */}
                <div className={`absolute inset-0 pointer-events-none opacity-[0.03] font-mono text-[8px] overflow-hidden break-all leading-none p-1 transition-opacity duration-500 ${isHovered ? 'opacity-[0.08] text-[#0055FF]' : 'text-white'}`}>
                    {isHovered ? Array(400).fill(0).map(() => (Math.random() > 0.5 ? '1' : '0')) : ''}
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#0055FF] transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#0055FF] transition-colors" />

                {/* Icon Logic */}
                <div className="relative mb-3">
                    <Icon className={`
                        transition-all duration-500 
                        ${large ? 'text-6xl md:text-7xl' : 'text-3xl md:text-4xl'}
                        ${isHovered ? 'text-white scale-110 drop-shadow-[0_0_15px_#0055FF]' : 'text-gray-600'}
                    `} />
                    
                    {/* Ghost effect on hover */}
                    {isHovered && (
                        <motion.div
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="absolute inset-0 text-[#0055FF] flex items-center justify-center"
                        >
                            <Icon className={large ? 'text-6xl md:text-7xl' : 'text-3xl md:text-4xl'} />
                        </motion.div>
                    )}
                </div>

                {/* Label */}
                <div className="text-center z-10">
                    <h3 className={`font-mono tracking-tighter transition-all duration-300 ${large ? 'text-lg font-black' : 'text-[10px] md:text-xs font-bold'} ${isHovered ? 'text-[#0055FF]' : 'text-gray-500'}`}>
                        {name.toUpperCase()}
                    </h3>
                    {large && isHovered && (
                        <motion.p 
                            initial={{ opacity: 0, y: 5 }} 
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[9px] text-gray-400 font-mono mt-1 hidden md:block"
                        >
                            SYSTEM_CORE_LEVEL: 09
                        </motion.p>
                    )}
                </div>

                {/* Scanline hover effect */}
                {isHovered && (
                    <motion.div 
                        initial={{ y: "-100%" }}
                        animate={{ y: "200%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-[2px] bg-[#0055FF]/20 shadow-[0_0_10px_#0055FF] z-20 pointer-events-none"
                    />
                )}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const prioritySkills = ["React.js", "Node.js", "Python", "Java", "Next.js", "TypeScript"];
    
    // Flattening constants and tagging priority
    const allSkills = Object.values(skills).flat().map(s => ({
        ...s,
        large: prioritySkills.includes(s.name)
    })).filter((v, i, a) => a.findIndex(t => t.name === v.name) === i); // Deduplicate

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.2;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
            }
        }

        for (let i = 0; i < 60; i++) particles.push(new Particle());

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(0, 85, 255, 0.2)";
            
            particles.forEach((p, i) => {
                p.update();
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x;
                    const dy = p.y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.strokeStyle = `rgba(0, 85, 255, ${0.1 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="skills" className="relative py-24 bg-[#050608] overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-40" />
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#0055FF]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-16 border-l-4 border-[#0055FF] pl-6"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                        TECH <br /> <span className="text-gray-600 italic">STACK_01</span>
                    </h2>
                    <p className="font-mono text-[10px] text-[#0055FF] mt-2 tracking-[0.3em]">CORE_COMPETENCIES_CATALOG</p>
                </motion.div>

                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 auto-rows-[100px] md:auto-rows-[120px] grid-flow-dense">
                    {allSkills.map((skill, index) => (
                        <SkillCard 
                            key={skill.name} 
                            name={skill.name} 
                            large={skill.large} 
                            index={index} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;