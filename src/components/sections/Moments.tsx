import React from 'react';
import { motion } from 'motion/react';

export const Moments = () => {
  return (
    <section id="momentos" className="py-24 bg-brand-blue text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h4 className="text-brand-red font-bold tracking-[0.2em] uppercase mb-4">La Chispa de la Vida</h4>
            <h2 className="text-4xl md:text-6xl font-display font-black leading-[0.9] tracking-tighter mb-8">
              MOMENTOS QUE NOS HACEN <span className="text-brand-red italic">VIBRAR</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg">
              Desde el asado del domingo hasta el gol que gritamos juntos. Vibra no es solo una bebida, es el testigo de nuestra alegría compartida.
            </p>
            
            <div className="flex flex-col gap-6">
              {[
                { title: "El Almuerzo de Abuela", desc: "El acompañante perfecto para cada sazón hogareña." },
                { title: "La Rumba con Amigos", desc: "Energía y frescura para seguir el ritmo de la noche." },
                { title: "Fiestas del Pueblo", desc: "Tradición que recorre cada rincón de nuestra geografía." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10"
                >
                  <div className="text-brand-red font-display font-black text-3xl">0{i+1}</div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                    <p className="text-blue-100/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-4 pt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=600" 
                alt="Fiesta" 
                className="w-full aspect-[3/4] object-cover rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=600" 
                alt="Brindis" 
                className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" 
                alt="Familia" 
                className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600" 
                alt="Celebración" 
                className="w-full aspect-[3/4] object-cover rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
