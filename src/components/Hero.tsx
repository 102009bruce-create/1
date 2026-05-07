import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-10 pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent text-[18px] font-medium mb-2 uppercase">
              I BUILD THE FUTURE OF INTENT
            </p>
            <h1 className="text-[80px] md:text-[120px] leading-[0.85] font-black tracking-[-4px] uppercase mb-6">
              ALEX<br />
              CHEN.
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-xl mt-8"
          >
            <p className="font-serif leading-[1.6] text-[16px] text-[#CCC]">
              <strong>我不只寫程式，我打造數位人格。</strong><br/>
              將複雜的技術力轉化為以人為本的商業價值。幫助您的團隊在 AI 時代，將潛力轉化為可擴展的市場領導力。
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end pb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-48 h-64 md:w-64 md:h-80 rounded overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
              alt="Alex Chen Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <span className="font-sans text-[10px] text-white/70 uppercase tracking-[2px]">Status: Online</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-[10px] font-sans text-muted uppercase tracking-[2px] cursor-pointer hover:text-accent transition-colors group">
            <span>Scroll to explore</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
