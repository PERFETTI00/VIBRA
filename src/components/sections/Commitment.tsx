import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Recycle, Droplets } from 'lucide-react';

export const Commitment = () => {
  return (
    <section id="compromiso" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h4 className="text-brand-red font-bold tracking-[0.2em] uppercase mb-4">Conciencia Vibrante</h4>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-navy tracking-tighter mb-6">
            NUESTRO COMPROMISO CON EL MAÑANA
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Amamos nuestra tierra tanto como amamos nuestras bebidas. Por eso, trabajamos incansablemente para reducir nuestra huella y proteger el paraíso que es Colombia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              icon: <Recycle size={32} />, 
              title: "Envases 100% Reciclables", 
              desc: "Toda nuestra línea Vibra está diseñada para volver a ser algo nuevo." 
            },
            { 
              icon: <Droplets size={32} />, 
              title: "Cuidado del Agua", 
              desc: "Optimizamos nuestros procesos para proteger nuestras fuentes hídricas." 
            },
            { 
              icon: <Leaf size={32} />, 
              title: "Producción Local", 
              desc: "Apoyamos al campo colombiano y sus materias primas de calidad." 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-3xl bg-brand-fresh border-2 border-transparent hover:border-brand-red/10 transition-all"
            >
              <div className="w-16 h-16 bg-white text-brand-red rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3 uppercase">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
