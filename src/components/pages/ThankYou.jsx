import React from "react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-dark-panel rounded-xl shadow-2xl p-8 text-center">
        <div className="text-6xl mb-6">PARABÉNS!</div>
        <h1 className="text-3xl font-bold text-accent-cyan mb-4">
          Seu pagamento foi <span className="text-green-400">APROVADO</span>
        </h1>
        <p className="text-gray-300 mb-6 text-xl">
          Sua <strong>LICENÇA</strong> está ativa!
        </p>
        <a
          href="/"
          className="inline-block bg-accent-purple hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
        >
          ← Voltar ao Rabisk2D
        </a>
      </div>
    </div>
  );
}