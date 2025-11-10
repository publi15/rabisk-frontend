import React from "react";
import Button from "../ui/Button";

const Support = () => {
  return (
    <section id="contato" className="py-16 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Suporte Incrível</h2>
          <p className="text-xl mb-6">
            DÚVIDA NO PROJETO? CHAME NOSSO SUPORTE 24 HORAS
          </p>
          <p className="text-lg">Resposta em até 5 minutos!</p>
        </div>
        <div className="md:w-1/2 text-center">
          <Button variant="outline" className="px-8 py-4 text-xl">
            💬 Suporte WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Support;
