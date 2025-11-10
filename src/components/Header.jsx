import React from "react";

const Header = ({ onOpenPlans }) => {
  return (
    <header className="bg-dark-panel shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO AQUI */}
        <img
          src="/rabisk.svg"
          alt="Rabisk 2D"
          className="h-8 md:h-10 w-auto" // ← TAMANHO IDEAL PARA HEADER
        />

        <nav className="hidden md:flex space-x-8">
          <a href="#recursos"
            className="text-gray-300 hover:text-accent-cyan transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('recursos').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Recursos
          </a>
          <a href="#sobre"
            className="text-gray-300 hover:text-accent-cyan hover:scale-125 transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Sobre
          </a>
          <a href="#contato"
            className="text-gray-300 hover:text-accent-cyan hover:scale-125 transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contato
          </a>
        </nav>

        {/* BOTÃO VER PLANOS - LIGA MODAL */}
        <button
          onClick={() => {
            document
              .querySelector("#planos")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-accent-purple hover:bg-accent-purple/90 text-white px-6 py-2 rounded-lg font-semibold hover:scale-100 transition-all"
        >
          Ver Planos
        </button>
      </div>
    </header >
  );
};

export default Header;
