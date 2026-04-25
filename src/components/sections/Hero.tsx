import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { BRAND } from '@/src/constants';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-blue">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-red rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[120px] opacity-10" />
        
        {/* Animated Bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              left: `${Math.random() * 100}%`,
              bottom: `-50px`,
            }}
            animate={{
              y: [-100, -800],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-brand-red py-1 px-4 rounded-full mb-6 text-white font-bold text-sm tracking-widest uppercase">
            Auténticamente Colombiana
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter mb-6 text-balance">
            EL SABOR QUE <span className="text-brand-red">VIBRA</span> EN TI
          </h1>
          <p className="text-xl text-blue-100 max-w-lg mb-8 leading-relaxed font-medium">
            La chispa de nuestra tierra en cada burbuja. Frescura que acompaña tus mejores momentos con familia y amigos.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-red text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(227,27,35,0.4)] hover:translate-y-[-4px] transition-all flex items-center gap-2 group">
              Descubre Sabores
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-brand-blue transition-all flex items-center gap-2">
              <Play size={20} fill="currentColor" />
              Nuestra Historia
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Floating Can Mockup (Simulated with div for style) */}
          <div className="relative w-64 md:w-80 aspect-[1/2] bg-gradient-to-br from-brand-red to-red-700 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden border-4 border-white/20 rotate-[-8deg] hover:rotate-0 transition-transform duration-700">
            <div className="flex-1 flex flex-col items-center justify-center p-8 gap-4">
              <div className="text-white font-display font-black text-6xl italic opacity-20">V</div>
              <div className="text-white font-display font-black text-4xl tracking-tighter leading-tight text-center">
                VIBRA
              </div>
              <div className="w-12 h-1 bg-white/30 rounded-full" />
              <div className="text-white/80 font-bold text-sm tracking-[0.2em] uppercase">Refrescante</div>
            </div>
            <div className="h-20 bg-black/10 flex items-center justify-center">
              <div className="w-40 h-2 bg-white/40 rounded-full" />
            </div>
          </div>
          
          {/* Decorative splashes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none -z-10 opacity-30">
             <div className="absolute top-10 left-0 w-32 h-32 bg-brand-red rounded-full blur-2xl" />
             <div className="absolute bottom-10 right-0 w-40 h-40 bg-blue-400 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
