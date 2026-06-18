/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { WhatsAppCard } from './components/WhatsAppCard';
import { LocationCard } from './components/LocationCard';
import { ReviewsCard } from './components/ReviewsCard';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center sm:p-8 font-sans">
      <main className="w-full max-w-[420px] h-[1850px] max-h-[160vh] bg-[#F5F7FA] shadow-[0_32px_64px_rgba(30,58,138,0.2)] rounded-[48px] overflow-hidden flex flex-col relative border-[8px] border-white">
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-0">
          <Header />

          <div className="px-5 pb-5 space-y-3">
            {/* Card 1 */}
            <ServiceCard 
              title="BANHO E TOSA"
              description="Limpo, cheiroso e saudável."
              image="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800"
              buttonText="Agendar agora"
              isPrimary={true}
            />

            <div className="grid grid-cols-2 gap-3">
              {/* Card 2 */}
              <ServiceCard 
                title="CLÍNICA VET"
                description="Saúde completa"
                image="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800"
                buttonText="Saiba mais"
                isPrimary={false}
              />

              {/* Card 3 */}
              <ServiceCard 
                title="PET SHOP"
                description="Melhores rações"
                image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
                buttonText="Comprar"
                isPrimary={false}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Card 4 */}
              <ServiceCard 
                title="BRINQUEDOS"
                description="Diversão garantida"
                image="https://images.unsplash.com/photo-1546975490-e8b92b67ae2f?auto=format&fit=crop&q=80&w=800"
                buttonText="Catálogo"
                isPrimary={false}
              />

              {/* Card 5 */}
              <ServiceCard 
                title="HOTEL PET"
                description="Conforto 24h"
                image="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800"
                buttonText="Reservar"
                isPrimary={false}
              />
            </div>

            {/* Card 6 */}
            <WhatsAppCard 
              title="ATENDIMENTO RÁPIDO"
              description="Agende via WhatsApp"
              buttonText="CONVERSAR"
            />

            {/* Card 7 */}
            <LocationCard />

            {/* Card 8 */}
            <ReviewsCard />
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}
