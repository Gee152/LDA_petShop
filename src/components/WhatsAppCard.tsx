import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface WhatsAppCardProps {
  title: string;
  description: string;
  buttonText: string;
}

export function WhatsAppCard({ title, description, buttonText }: WhatsAppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-[#25D366] rounded-[32px] p-4 flex items-center justify-between shadow-md h-[80px] w-full cursor-pointer group relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-white/20 transition-colors"></div>

      <div className="flex items-center gap-3 relative z-10 w-2/3">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 transition-transform">
          <MessageCircle size={24} className="text-[#25D366]" />
        </div>
        <div>
          <h3 className="text-white font-bold text-sm leading-tight truncate">{title}</h3>
          <p className="text-white/90 text-[10px] line-clamp-1 mt-0.5">{description}</p>
        </div>
      </div>

      <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-3 py-2 rounded-2xl text-[10px] font-bold transition-all relative z-10 whitespace-nowrap ml-2">
        {buttonText}
      </button>
    </motion.div>
  );
}
