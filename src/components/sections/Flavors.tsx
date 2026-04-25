import React from 'react';
import { motion } from 'motion/react';
import { FLAVORS } from '@/src/constants';

export const Flavors = () => {
  return (
    <section id="sabores" className="py-24 bg-brand-fresh relative overflow-hidden">
      {/* Decorative BG text */}
      <div className="absolute top-0 left-0 w-full whitespace-nowrap overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[20vw] font-display font-black leading-none uppercase">
          REFRESCANTE • BURBUJEANTE • NATURAL • 
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-brand-red font-bold tracking-[0.2em] uppercase mb-4">Nuestra Explosión de Sabor</h4>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-navy leading-tight tracking-tighter">
            HAY UNA VIBRA PARA CADA SONRISA
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLAVORS.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:translate-y-[-8px] cursor-pointer"
            >
              <div 
                className={`w-full aspect-square rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 ${flavor.accentColor} bg-opacity-10`}
              >
                {/* Simulated product */}
                <div className="relative w-24 h-48 bg-white rounded-3xl shadow-xl flex flex-col p-4 border-2 border-white/50">
                  <div className={`flex-1 rounded-2xl ${flavor.accentColor} flex items-center justify-center text-white font-display font-black text-2xl italic`}>
                    V
                  </div>
                  <div className="h-8 flex flex-col gap-1 items-center justify-center pt-2">
                     <div className="w-8 h-1 bg-gray-200 rounded-full" />
                  </div>
                </div>
                
                {/* Floating bubbles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute rounded-full ${flavor.accentColor} opacity-20`}
                      animate={{
                        y: [20, -20, 20],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        width: 20 + i * 10,
                        height: 20 + i * 10,
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 10}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-display font-black text-brand-navy mb-2 uppercase tracking-tight">{flavor.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {flavor.description}
              </p>
              
              <button className="w-full py-4 border-2 border-brand-navy/5 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-brand-navy group-hover:text-white transition-all">
                Ver detalles
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
