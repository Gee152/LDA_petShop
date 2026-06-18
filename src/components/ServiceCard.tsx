import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  isPrimary?: boolean;
}

export function ServiceCard({ title, description, image, buttonText, isPrimary }: ServiceCardProps) {
  if (isPrimary) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="bg-[#1E3A8A] rounded-[32px] p-5 relative overflow-hidden flex items-center justify-between shadow-lg h-[130px] w-full cursor-pointer group"
      >
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
          <img src={image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent"></div>
        </div>
        
        <div className="z-10 w-2/3 relative">
          <span className="text-[#67E8F9] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
            <Sparkles size={10} /> VIP Treatment
          </span>
          <h2 className="text-white font-bold text-xl leading-tight mt-1 truncate">
            {title}
          </h2>
          <p className="text-white/70 text-[10px] mt-1 line-clamp-2">
            {description}
          </p>
          <button className="mt-3 bg-white text-[#1E3A8A] text-[11px] font-bold py-2 px-6 rounded-full inline-flex items-center gap-1 hover:bg-gray-50 transition-colors">
            {buttonText} <ArrowRight size={12} />
          </button>
        </div>
        <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-[32px] p-4 shadow-sm border border-gray-100 h-[120px] flex flex-col justify-between cursor-pointer w-full group relative overflow-hidden"
    >
      <div className="absolute -right-6 -top-6 w-24 h-24 opacity-[0.03] group-hover:opacity-10 transition-opacity rounded-full overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden border border-gray-100 relative z-10 shrink-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 mt-auto">
        <h3 className="text-[#1E3A8A] font-bold text-sm leading-tight line-clamp-1">{title}</h3>
        <p className="text-[9px] text-gray-500 line-clamp-1 mt-0.5">{description}</p>
      </div>

      <button className="text-[9px] font-bold text-[#1E3A8A] flex items-center gap-1 uppercase relative z-10 mt-1.5 group-hover:text-casa-blue-light transition-colors">
        {buttonText} <span className="text-xs">→</span>
      </button>
    </motion.div>
  );
}
