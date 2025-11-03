import React from "react";
import Card from "../ui/Card";

const Testimonial = () => {
  return (
    <section className="py-16 bg-dark-panel">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-cyan">
          O que os Criadores Dizem
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card variant="testimonial">
            <p className="text-gray-300 mb-6">
              "Rabisk2D mudou minha vida como criador! Animações incríveis em
              minutos"
            </p>
            <div className="flex items-center">
              {/* ✅ CORRIGIDO - CÍRCULO COM INICIAL */}
              <div className="w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                M
              </div>
              <div>
                <p className="font-semibold text-white">Maria Silva</p>
                <p className="text-sm text-gray-400">
                  Criadora TikTok • 500K seguidores
                </p>
              </div>
            </div>
          </Card>

          <Card variant="testimonial">
            <p className="text-gray-300 mb-6">
              "Melhor software que já usei! Export direto pro Insta, qualidade
              insana!"
            </p>
            <div className="flex items-center">
              {/* ✅ CORRIGIDO - CÍRCULO COM INICIAL */}
              <div className="w-10 h-10 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                J
              </div>
              <div>
                <p className="font-semibold text-white">João Santos</p>
                <p className="text-sm text-gray-400">
                  YouTuber • 200K inscritos
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
