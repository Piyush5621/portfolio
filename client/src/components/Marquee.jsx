const Marquee = () => {
    return (
        <div className="w-full bg-primary text-black py-4 overflow-hidden -rotate-1 border-y-4 border-black z-20 relative">
            <div className="whitespace-nowrap flex gap-16 font-heading font-black text-4xl uppercase tracking-tighter animate-marquee">
                <span>Frontend Dev</span><span className="text-stroke text-white">UI/UX Design</span><span>Backend Logic</span><span className="text-stroke text-white">Creative Coding</span>
                <span>Frontend Dev</span><span className="text-stroke text-white">UI/UX Design</span><span>Backend Logic</span><span className="text-stroke text-white">Creative Coding</span>
            </div>
        </div>
    );
};

export default Marquee;
