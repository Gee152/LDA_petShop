import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  stars: number;
  text: string;
}

const reviews: Review[] = [
  { stars: 5, text: "Excelente atendimento e muito carinho com os animais." },
  { stars: 5, text: "Meu cachorro ama o banho e tosa da Casa do Pet." },
  { stars: 5, text: "Equipe atenciosa e veterinários excelentes." }
];

export function ReviewsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-white rounded-[32px] p-4 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-[#1E3A8A] font-bold text-xs uppercase">Avaliações dos Clientes</h3>
        <div className="flex text-yellow-400 gap-0.5">
          <Star size={12} fill="currentColor" className="text-yellow-400" />
          <Star size={12} fill="currentColor" className="text-yellow-400" />
          <Star size={12} fill="currentColor" className="text-yellow-400" />
          <Star size={12} fill="currentColor" className="text-yellow-400" />
          <Star size={12} fill="currentColor" className="text-yellow-400" />
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto snap-x pb-2 w-full scrollbar-hide px-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {reviews.map((review, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="snap-center shrink-0 w-[85%] bg-gray-50 rounded-2xl p-4 border border-gray-100 flex flex-col gap-2"
          >
            <p className="text-[11px] italic text-gray-600 leading-tight">
              "{review.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
