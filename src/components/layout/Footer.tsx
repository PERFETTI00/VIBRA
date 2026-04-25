import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/src/constants';

export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative large V */}
      <div className="absolute -bottom-24 -right-24 text-[40rem] font-display font-black italic text-white/5 pointer-events-none select-none leading-none">
        V
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-16 items-start">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-display font-black text-2xl italic">
                V
              </div>
              <span className="text-3xl font-display font-black tracking-tighter">
                {BRAND.name.toUpperCase()}
              </span>
            </div>
            <p className="text-blue-100/60 max-w-sm mb-10 leading-relaxed">
              La marca de bebidas que celebra el sabor y la alegría de ser colombianos. Más que una burbuja, es una tradición.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all group">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10">
            <h3 className="text-2xl font-display font-bold mb-4 uppercase">¿Sientes la Vibra?</h3>
            <p className="text-blue-100/70 mb-6">Suscríbete para recibir lanzamientos exclusivos y promos que te harán sonreír.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-colors">
                Unirme
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-white/10">
          <div>
            <h5 className="font-bold text-brand-red mb-6 uppercase tracking-widest text-xs">Compañía</h5>
             <ul className="space-y-4 text-blue-100/60">
               {NAV_LINKS.map(l => (
                 <li key={l.name}><a href={l.href} className="hover:text-white transition-colors">{l.name}</a></li>
               ))}
             </ul>
          </div>
          <div>
            <h5 className="font-bold text-brand-red mb-6 uppercase tracking-widest text-xs">Legal</h5>
             <ul className="space-y-4 text-blue-100/60">
               <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
             </ul>
          </div>
          <div>
            <h5 className="font-bold text-brand-red mb-6 uppercase tracking-widest text-xs">Contacto</h5>
             <ul className="space-y-4 text-blue-100/60">
               <li>hola@vibra.co</li>
               <li>01-800-VIBRA-00</li>
               <li>Bogotá, Colombia</li>
             </ul>
          </div>
          <div>
            <h5 className="font-bold text-brand-red mb-6 uppercase tracking-widest text-xs">Novedades</h5>
             <p className="text-xs text-blue-100/40 leading-relaxed mb-4">
               Descarga nuestra App y obtén descuentos en cada Vibra que destapes.
             </p>
             <div className="flex flex-col gap-2">
               <div className="h-10 bg-white/10 rounded-lg animate-pulse" />
               <div className="h-10 bg-white/10 rounded-lg animate-pulse" />
             </div>
          </div>
        </div>

        <div className="pt-12 text-center border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-100/30 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} BEBIDAS VIBRA S.A. TODOS LOS DERECHOS RESERVADOS.</p>
          <p>EL EXCESO DE AZÚCAR ES PERJUDICIAL PARA LA SALUD.</p>
        </div>
      </div>
    </footer>
  );
};
