//@ts-ignore
import logoKonoha from '@/assets/8987bd130641623.6184473f5678a.png';

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full text-center p-6 bg-white/50 backdrop-blur-md border-t border-gray-100 rounded-b-[40px] mt-2">
      <div className="flex justify-center gap-2 mb-3">
        <div className="w-2 h-2 bg-[#1E3A8A]/40 rounded-full"></div>
        <div className="w-2 h-2 bg-[#1E3A8A]/40 rounded-full"></div>
        <div className="w-2 h-2 bg-[#1E3A8A]/40 rounded-full"></div>
      </div>
      <p className="text-[9px] font-bold text-[#1F2937]/50 uppercase tracking-[0.2em]">
        © {year} Casa do Pet - Premium
      </p>
      <div className="flex justify-center  text-[10px] font-medium text-gray-400 mt-2">
        <p className="text-[9px] font-bold text-[#1F2937]/50 uppercase tracking-[0.2em] py-1">
          Equipe de desenvolvimento: KonohaTech
        </p>
         <img src={logoKonoha} alt="KonohaTech" className="w-4 h-4 mb-1" />
      </div>
    </footer>
  );
}
