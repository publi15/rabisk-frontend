import React, { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";

const DownloadSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sliderRef = useRef(null);

  // FECHA AO CLICAR FORA
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sliderRef.current && !sliderRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <>
      {/* SLIDER OCULTO/SLIDE DOWN */}
      <div
        ref={sliderRef}
        className={`
          fixed top-0 left-0 w-full z-40 bg-dark-bg border-b-2 border-gray-700
          transition-all duration-500 ease-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* HEADER SLIDER */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-accent-cyan">
              Baixe Agora - Grátis
            </h2>
            <Button
              variant="outline"
              size="small"
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 p-0"
            >
              ✕
            </Button>
          </div>

          {/* 3 CARDS ALINHADOS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* WINDOWS */}
            <div className="bg-dark-panel p-8 rounded-xl text-center border-2 border-blue-500">
              <div className="text-6xl mb-6">🪟</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Windows</h3>
              <p className="text-gray-400 mb-6">Windows 10/11</p>
              <Button
                variant="blue"
                className="w-full mb-2"
                onClick={() => window.open("/download/windows.exe", "_blank")}
              >
                📥 Baixar .exe
              </Button>
              <p className="text-xs text-gray-500">38MB • 64-bit</p>
            </div>

            {/* MAC */}
            <div className="bg-dark-panel p-8 rounded-xl text-center border-2 border-green-500">
              <div className="text-6xl mb-6">🍎</div>
              <h3 className="text-2xl font-bold mb-4 text-white">MacOS</h3>
              <p className="text-gray-400 mb-6">macOS Ventura+</p>
              <Button
                variant="green"
                className="w-full mb-2"
                onClick={() => window.open("/download/rabisk2d.dmg", "_blank")}
              >
                📥 Baixar .dmg
              </Button>
              <p className="text-xs text-gray-500">42MB • Universal</p>
            </div>

            {/* LINUX */}
            <div className="bg-dark-panel p-8 rounded-xl text-center border-2 border-orange-500">
              <div className="text-6xl mb-6">🐧</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Linux</h3>
              <p className="text-gray-400 mb-6">Ubuntu 20.04+</p>
              <Button
                variant="orange"
                className="w-full mb-2"
                onClick={() =>
                  window.open("/download/rabisk2d.appimage", "_blank")
                }
              >
                📥 Baixar .AppImage
              </Button>
              <p className="text-xs text-gray-500">35MB • Executável</p>
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP ESCURO (SÓ QUANDO ABERTO) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default DownloadSlider;
