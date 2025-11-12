// src/components/sections/Plans.jsx
import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { FaCheckCircle, FaStar, FaGem, FaTimes } from "react-icons/fa";

const Plans = () => {
  const [isPlansOpen, setIsPlansOpen] = useState(false);

  // DETECTA SUCESSO AO VOLTAR DO STRIPE
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get('session_id');
    if (sessionId) {
      alert('PAGAMENTO CONCLUÍDO! Sua licença PRO está ativa.');
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // FUNÇÃO DE CHECKOUT DIRETO
  const checkout = async (plan) => {
    try {
      const res = await fetch('https://rabisk-backend.onrender.com/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      } else {
        alert('Erro ao criar sessão de pagamento.');
      }
    } catch (err) {
      console.error(err);
      alert('Erro ao conectar com o servidor. Tente novamente.');
    }
  };

  return (
    <>
      {/* SEÇÃO PRINCIPAL */}
      <section id="planos" className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-accent-cyan mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Comece grátis e evolua conforme sua necessidade
          </p>
          <Button
            variant="purple"
            size="large"
            onClick={() => setIsPlansOpen(true)}
          >
            Ver Todos os Planos
          </Button>
        </div>
      </section>

      {/* MODAL DE PLANOS */}
      <div
        className={`
          fixed top-20 left-0 w-full z-40 bg-dark-bg border-b-2 border-gray-700
          transition-all duration-500 ease-in-out
          ${isPlansOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-accent-cyan">
              Escolha Seu Plano
            </h2>
            <Button
              variant="outline"
              size="small"
              onClick={() => setIsPlansOpen(false)}
              className="w-10 h-10 p-0"
            >
              <FaTimes />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* GRATUITO */}
            <Card className="border-2 border-accent-green shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <FaCheckCircle className="text-3xl mr-3 text-accent-green" />
                <h3 className="text-xl font-bold text-accent-green">GRATUITO</h3>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><FaCheckCircle className="text-accent-green mr-2" />Ferramentas básicas</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-green mr-2" />5 projetos</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-green mr-2" />Marca d'água</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-green mr-2" />Export 480p</li>
              </ul>
              <div className="text-2xl font-bold text-accent-green mb-4 text-center">R$ 0,00</div>
              <Button variant="green" className="w-full">Começar Gratuitamente</Button>
            </Card>

            {/* MENSAL */}
            <Card className="relative border-2 border-accent-purple shadow-xl transform scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-purple text-white px-4 py-2 rounded-full text-xs font-bold">
                <FaStar className="inline mr-1" /> MAIS POPULAR
              </div>
              <div className="flex items-center justify-center mb-6 pt-8">
                <FaStar className="text-3xl mr-3 text-accent-purple" />
                <h3 className="text-xl font-bold text-accent-purple">MENSAL</h3>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><FaCheckCircle className="text-accent-purple mr-2" />Tudo do Gratuito</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-purple mr-2" />Sem marca d'água</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-purple mr-2" />Projetos ilimitados</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-purple mr-2" />Export HD 1080p</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-purple mr-2" />Suporte 24h</li>
              </ul>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-accent-purple">R$ 9,99</div>
                <div className="text-sm text-accent-purple">/mês</div>
              </div>
              <Button
                variant="magenta"
                className="w-full"
                onClick={() => checkout('subscription')}
              >
                Comprar Mensal
              </Button>
            </Card>

            {/* VITALÍCIO */}
            <Card className="border-2 border-accent-orange shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <FaGem className="text-3xl mr-3 text-accent-orange" />
                <h3 className="text-xl font-bold text-accent-orange">VITALÍCIO</h3>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><FaCheckCircle className="text-accent-orange mr-2" />Tudo do Mensal</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-orange mr-2" />Atualizações forever</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-orange mr-2" />Suporte prioritário</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-orange mr-2" />Export 4K</li>
                <li className="flex items-center"><FaCheckCircle className="text-accent-orange mr-2" />Recursos exclusivos</li>
              </ul>
              <div className="text-2xl font-bold text-accent-orange mb-4 text-center">R$ 99,99</div>
              <Button
                variant="orange"
                className="w-full"
                onClick={() => checkout('lifetime')}
              >
                Comprar Vitalício
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {isPlansOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsPlansOpen(false)}
        />
      )}
    </>
  );
};

export default Plans;
