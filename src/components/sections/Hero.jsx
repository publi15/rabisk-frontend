import React, { useState } from "react";
import Button from "../ui/Button";
import { FaWindows, FaApple, FaLinux, FaDownload } from "react-icons/fa";

const Hero = () => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <>
      <section className="py-20 text-white relative overflow-hidden">
        {/* IMAGEM DE FUNDO */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/banner1.svg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Comece
            <span className="text-2xl md:text-3xl text-accent-cyan">
              Grátis
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto">
            Software de animação 2D mais poderoso para criadores de conteúdo
          </p>

          <Button
            variant="outline"
            size="large"
            className="mb-4"
            onClick={() => setIsDownloadOpen(true)}
          >
            Baixar Grátis
          </Button>

          <div className="text-sm text-white/70">
            Sem cartão. Sem compromisso.
          </div>
        </div>
      </section>

      {/* SLIDE DOWN - CORRIGIDO */}
      <div
        className={`
          fixed top-20 left-0 w-full z-40 bg-dark-bg border-b-2 border-gray-700
          transition-all duration-500 ease-in-out
          ${
            isDownloadOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-accent-cyan">
              Baixe Agora - Grátis
            </h2>
            <Button
              variant="outline"
              size="small"
              onClick={() => setIsDownloadOpen(false)}
              className="w-10 h-10 p-0"
            >
              ✕
            </Button>
          </div>

          {/* 3 CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* WINDOWS */}
            <div className="bg-dark-panel p-8 rounded-xl text-center text-neutral-400 border-2 border-blue-500">
              <div className="flex justify-center items-center h-20 w-20 mx-auto mb-6">
                <FaWindows className="text-6xl text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Windows</h3>
              <p className="text-gray-400 mb-6">Windows 10/11</p>
              <Button variant="blue" className="w-full mb-2">
                Baixar Windows
              </Button>
              <p className="text-xs text-gray-500">38MB</p>
            </div>

            {/* MAC */}
            <div className="bg-dark-panel p-8 rounded-xl text-center text-neutral-400 border-2 border-green-500">
              <div className="flex justify-center items-center h-20 w-20 mx-auto mb-6">
                <FaApple className="text-6xl text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">MacOS</h3>
              <p className="text-gray-400 mb-6">macOS Ventura+</p>
              <Button variant="green" className="w-full mb-2">
                Baixar Mac
              </Button>
              <p className="text-xs text-gray-500">42MB</p>
            </div>

            {/* LINUX */}
            <div className="bg-dark-panel p-8 rounded-xl text-center text-neutral-400 border-2 border-orange-500">
              <div className="flex justify-center items-center h-20 w-20 mx-auto mb-6">
                <FaLinux className="text-6xl text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Linux</h3>
              <p className="text-gray-400 mb-6">Ubuntu 20.04+</p>
              <Button variant="orange" className="w-full mb-2">
                Baixar Linux
              </Button>
              <p className="text-xs text-gray-500">35MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP - SÓ QUANDO ABERTO */}
      {isDownloadOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsDownloadOpen(false)}
        />
      )}
    </>
  );
};

export default Hero;
