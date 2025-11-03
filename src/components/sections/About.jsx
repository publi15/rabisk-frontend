import React from "react";
import Card from "../ui/Card";
import {
  FaPalette,
  FaShareAlt,
  FaLaptop,
  FaDownload,
  FaStar,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-dark-panel">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-accent-cyan">
            Sobre o Rabisk2D
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Software de animação 2D criado para simplificar a vida dos criadores
            de conteúdo.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* ANIMAÇÃO */}
            <div className="text-center">
              <div className="flex justify-center items-center h-12 w-12 mx-auto mb-2">
                <FaPalette className="text-3xl text-accent-green" />
              </div>
              <h3 className="font-bold text-accent-green">Animação</h3>
              <p className="text-gray-400">2D Profissional</p>
            </div>

            {/* REDES SOCIAIS */}
            <div className="text-center">
              <div className="flex justify-center items-center h-12 w-12 mx-auto mb-2">
                <FaShareAlt className="text-3xl text-accent-magenta" />
              </div>
              <h3 className="font-bold text-accent-magenta">Redes Sociais</h3>
              <p className="text-gray-400">Export Otimizado</p>
            </div>

            {/* MULTIPLATAFORMA */}
            <div className="text-center">
              <div className="flex justify-center items-center h-12 w-12 mx-auto mb-2">
                <FaLaptop className="text-3xl text-accent-orange" />
              </div>
              <h3 className="font-bold text-accent-orange">Multiplataforma</h3>
              <p className="text-gray-400">Windows/Linux/Mac</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* DOWNLOADS */}
          <Card className="bg-accent-cyan text-white text-center">
            <div className="flex justify-center items-center h-12 w-12 mx-auto mb-2">
              <FaDownload className="text-4xl" />
            </div>
            <p className="text-sm">Downloads</p>
          </Card>

          {/* AVALIAÇÃO */}
          <Card className="bg-accent-purple text-white text-center">
            <div className="flex justify-center items-center h-12 w-12 mx-auto mb-2">
              <div className="flex items-center">
                <FaStar className="text-2xl mr-1" />
                <span className="text-2xl font-bold">5</span>
              </div>
            </div>
            <p className="text-sm">Avaliação</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
