import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export function LocationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-[32px] p-4 shadow-sm border border-gray-100 flex items-center justify-between w-full group cursor-pointer relative overflow-hidden h-[90px]"
    >
       <div className="absolute right-0 top-0 w-32 h-32 opacity-10">
         <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
       </div>

      <div className="flex items-center gap-3 relative z-10 w-2/3">
        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 transition-transform">
          <MapPin size={20} className="text-[#1E3A8A]" />
        </div>
        <div>
          <h3 className="text-[#1E3A8A] font-bold text-xs uppercase leading-tight truncate">Nossa Localização</h3>
          <p className="text-gray-500 text-[10px] line-clamp-1 mt-0.5">Venha visitar nossa loja</p>
        </div>
      </div>

      <button className="text-[10px] font-bold text-[#1E3A8A] flex items-center justify-center gap-1 bg-gray-50 px-3 py-2 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors relative z-10 whitespace-nowrap">
        <Navigation size={12} /> Mapa
      </button>
    </motion.div>
  );
}
