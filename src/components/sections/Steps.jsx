import React from "react";

const Steps = () => {
  const steps = [
    {
      num: 1,
      color: "accent-green",
      title: "Baixe Grátis",
      desc: "Instalação em 30s",
    },
    {
      num: 2,
      color: "accent-magenta",
      title: "Crie Animação",
      desc: "Interface intuitiva",
    },
    {
      num: 3,
      color: "accent-purple",
      title: "Exporte HD",
      desc: "1 clique para redes",
    },
    {
      num: 4,
      color: "accent-orange",
      title: "Publique!",
      desc: "Conteúdo viral pronto",
    },
  ];

  return (
    <section id="contato" className="py-16 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-cyan">
          Comece em 4 Passos
        </h2>
        <div className="flex justify-center space-x-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center flex-1">
              <div
                className={`w-16 h-16 bg-${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-white font-bold text-xl">{step.num}</span>
              </div>
              <h3 className="font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
