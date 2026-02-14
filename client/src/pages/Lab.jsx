import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBug, FaTrophy, FaArrowLeft, FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import confetti from 'canvas-confetti';

// Game Constants
const MAX_BUGS = 15; // Max concurrent bugs to prevent lag
const BASE_SPEED = 5; // Seconds to cross screen
const SPAWN_RATE = 1500; // ms

// Utility to get random number
const random = (min, max) => Math.random() * (max - min) + min;

// Utility to get random edge position
const getRandomSpawn = () => {
    const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    let x, y, rotate;

    switch (edge) {
        case 0: // Top
            x = random(0, 100); y = -10; rotate = 180;
            break;
        case 1: // Right
            x = 110; y = random(0, 100); rotate = -90;
            break;
        case 2: // Bottom
            x = random(0, 100); y = 110; rotate = 0;
            break;
        case 3: // Left
            x = -10; y = random(0, 100); rotate = 90;
            break;
        default:
            x = 0; y = 0; rotate = 0;
    }
    return { x, y, rotate };
};

const Lab = () => {
    const [gameState, setGameState] = useState('idle'); // idle, playing, paused, won
    const [score, setScore] = useState(0);
    const [bugs, setBugs] = useState([]);
    const [timeLeft, setTimeLeft] = useState(60); // Optional timer? Maybe endless for "zen"
    const spawnTimerRef = useRef(null);
    const gameLoopRef = useRef(null);

    // Start Game
    const startGame = () => {
        setGameState('playing');
        setScore(0);
        setBugs([]);
        setTimeLeft(60); // If using timer
    };

    // Spawn Logic
    useEffect(() => {
        if (gameState === 'playing') {
            const spawnBug = () => {
                if (bugs.length < MAX_BUGS) {
                    const { x, y, rotate } = getRandomSpawn();
                    const newBug = {
                        id: Date.now() + Math.random(),
                        x,
                        y,
                        rotate,
                        type: Math.random() > 0.8 ? 'boss' : 'normal', // 20% chance for boss
                        speed: random(BASE_SPEED - 1, BASE_SPEED + 2)
                    };
                    setBugs(prev => [...prev, newBug]);
                }
            };

            const interval = setInterval(spawnBug, Math.max(500, SPAWN_RATE - (score * 50))); // Get faster as score goes up
            return () => clearInterval(interval);
        }
    }, [gameState, bugs.length, score]);

    // Win Condition
    useEffect(() => {
        if (score >= 50 && gameState !== 'won') {
            setGameState('won');
            confetti({
                particleCount: 200,
                spread: 160,
                origin: { y: 0.6 }
            });
        }
    }, [score, gameState]);

    // Handle Click (Squash)
    const squashBug = (e, bugId, type) => {
        e.stopPropagation();

        // Visual Explosion
        const rect = e.target.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            particleCount: 40,
            spread: 60,
            origin: { x, y },
            colors: type === 'boss' ? ['#ff0000', '#ffffff'] : ['#00ff00', '#000000', '#ffffff'],
            shapes: ['square'], // Binary bits look
            scalar: 0.8,
            disableForReducedMotion: true,
            zIndex: 100
        });

        // Remove bug
        setBugs(prev => prev.filter(b => b.id !== bugId));

        // Score
        const points = type === 'boss' ? 5 : 1;
        setScore(prev => prev + points);
    };

    return (
        <div className="relative w-full h-screen bg-[#050608] overflow-hidden font-mono text-white select-none cursor-crosshair">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* UI Overlay */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-50 pointer-events-none">
                {/* Back Button */}
                <Link to="/" className="pointer-events-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm transition-all border border-white/10">
                    <FaArrowLeft /> Exit Lab
                </Link>

                {/* Scoreboard */}
                <div className="flex flex-col items-end gap-2">
                    <div className="bg-black/50 border-2 border-green-500/50 p-4 rounded-xl backdrop-blur-md shadow-[0_0_15px_rgba(0,255,0,0.2)]">
                        <div className="text-xs text-green-400 uppercase tracking-widest mb-1">Bugs Squashed</div>
                        <div className="text-4xl font-bold font-mono nums text-green-400 text-right">
                            {score.toString().padStart(3, '0')}
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls Center (When Idle/Paused) */}
            {(gameState === 'idle' || gameState === 'paused') && (
                <div className="absolute inset-0 flex items-center justify-center z-40 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-[#111] border border-white/10 p-8 rounded-2xl max-w-md text-center shadow-2xl"
                    >
                        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            BUG HUNTER
                        </h1>
                        <p className="text-gray-400 mb-8">
                            Software bugs are taking over your portfolio.
                            <br />Squash <span className="text-white font-bold">50 bugs</span> to prove your debugging skills.
                        </p>

                        <button
                            onClick={startGame}
                            className="group relative px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95"
                        >
                            <span className="flex items-center gap-2">
                                {gameState === 'paused' ? <FaPlay /> : <FaBug />}
                                {gameState === 'paused' ? 'RESUME' : 'START DEBUGGING'}
                            </span>
                        </button>
                    </motion.div>
                </div>
            )}

            {/* Win Screen */}
            {gameState === 'won' && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-md">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-center"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-yellow-400 text-6xl mb-4 flex justify-center"
                        >
                            <FaTrophy />
                        </motion.div>
                        <h2 className="text-3xl font-bold mb-2">SENIOR DEBUGGER STATUS: UNLOCKED</h2>
                        <p className="text-gray-400 mb-8">You've cleared the system. Verified skill.</p>
                        <button
                            onClick={startGame}
                            className="px-6 py-2 border border-white/20 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                        >
                            <FaRedo /> Play Again
                        </button>
                    </motion.div>
                </div>
            )}

            {/* Play Area */}
            <div className="absolute inset-0 overflow-hidden">
                <AnimatePresence>
                    {bugs.map((bug) => (
                        <motion.div
                            key={bug.id}
                            initial={{
                                left: `${bug.x}%`,
                                top: `${bug.y}%`,
                                opacity: 1,
                                scale: 0.5
                            }}
                            animate={{
                                left: '50%',
                                top: '50%',
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                                duration: bug.speed,
                                ease: "linear"
                            }}
                            className="absolute cursor-crosshair"
                            onMouseDown={(e) => squashBug(e, bug.id, bug.type)}
                        >
                            <div
                                className={`p-4 rounded-full transition-transform active:scale-90 hover:scale-110 ${bug.type === 'boss' ? 'text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]' : 'text-green-400 drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]'
                                    }`}
                                style={{ transform: `rotate(${bug.rotate}deg)` }}
                            >
                                <FaBug size={bug.type === 'boss' ? 48 : 28} />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

        </div>
    );
};

export default Lab;
