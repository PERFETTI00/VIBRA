import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, MapPin } from 'lucide-react';

export const History = () => {
  return (
    <section id="historia" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800" 
                alt="Tradición colombiana"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent flex items-bottom p-10">
                <p className="text-white text-2xl font-display font-bold italic leading-tight self-end">
                  "Donde sea que estemos, siempre habrá una Vibra esperándonos."
                </p>
              </div>
            </div>
            {/* Decal */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-red rounded-full border-[10px] border-white flex items-center justify-center p-6 shadow-xl rotate-12 z-20">
              <span className="text-white text-center font-display font-black text-xs uppercase leading-none">
                Hecho con <br/> Orgullo en Colombia
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-brand-red font-bold tracking-[0.2em] uppercase mb-4">Nuestra Herencia</h4>
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-navy mb-8 leading-[1.1] tracking-tighter">
              DÉCADAS REFRESCANDO <br/> EL CORAZÓN DEL PAÍS
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nacimos en el corazón de nuestras montañas con un propósito simple: crear la bebida que une a las familias. Desde las fiestas de barrio hasta las cenas más elegantes, Vibra ha estado allí, burbujeando con la alegría que nos caracteriza.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-brand-navy mb-1 uppercase">Pura Pasión</h5>
                  <p className="text-sm text-gray-500">Recetas que pasan de generación en generación.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-brand-navy mb-1 uppercase">Comunidad</h5>
                  <p className="text-sm text-gray-500">Cerca de cada tendero y de cada hogar.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 text-brand-blue font-bold flex items-center gap-2 group">
              Conoce más sobre nosotros
              <div className="w-8 h-[2px] bg-brand-blue group-hover:w-12 transition-all" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
