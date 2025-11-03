import React, { useRef, useEffect } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { FaTimes } from "react-icons/fa";

const FeatureSlider = ({ isOpen, onClose, featureId }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sliderRef.current && !sliderRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  const features = [
    {
      id: "transform",
      title: "Transform Animation",
      desc: "Recurso desenvolvido no Rabisk 2D pensado exclusivamente em praticidade e performance nas produções das animações. Permite que o usuário, mesmo sendo iniciante e com pouca prática, durante o processo de animação, tenha o controle das formas e rotação em eixo preferencial do objeto selecionado, podendo assim copiar e colar cada frame transformados de forma subsequente em frames posteriores. Com tudo isso, permite uma aceleração significativa.",
      color: "accent-cyan",
      image: "/transform-animation.gif",
    },
    {
      id: "attachment",
      title: "Attachment Controller",
      desc: "Recurso chave no Rabisk 2D. O Attachment Controller oferece 8 eixos de posições do objeto selecionado a ser animado, com movimentos de 1px a 23px contando também com modo de movimento turbo. Mais agilidade e precisão a cada frame.",
      color: "accent-orange",
      image: "/attachment-controller.gif",
    },
    {
      id: "rig",
      title: "Rig Compound",
      desc: "Diferente do sistema de Rig tradicional, aqui no Rabisk 2D Lite o Rig Compound tem a função principal de oferecer a flexibilidade ao usuário que precise de movimentos rotacionais com precisão de movimentos rítmicos.",
      color: "accent-purple",
      image: "/rig-compound.gif",
    },
    {
      id: "layer",
      title: "Layer Rail",
      desc: "É o espelho da Timeline Principal, porém individual, correspondendo a cada camada criada com marcadores ColorLayer, implementado no Rabisk 2D justamente para que o usuário tenha controle total do início ao fim da animação de cada objeto dentro do projeto.",
      color: "accent-magenta",
      image: "/layer-rail.gif",
    },
    {
      id: "performance",
      title: "Alta Performance",
      desc: "Aceleração de até 5x na produção de animações. Fluidez total em todos os frames, mesmo em projetos complexos.",
      color: "accent-green",
      image: "/performance.gif",
    },
    {
      id: "beginner",
      title: "Iniciante-Friendly",
      desc: "Interface simples e intuitiva - zero curva de aprendizado. Crie animações profissionais em minutos!",
      color: "accent-blue",
      image: "/beginner-friendly.gif",
    },
  ];
  const currentFeature = features.find((f) => f.id === featureId);

  return (
    <>
      {/* SLIDER - SÓ TRANSFORM! SEM OPACITY! */}
      <div
        ref={sliderRef}
        className={`
          fixed top-0 left-0 w-full z-40 bg-dark-bg border-b-2 border-gray-700
          transition-all duration-500 ease-out
        ${isOpen ? "translate-y-0" : "-translate-y-[260px]"}  // ← SÓ MUDA AQUI!
     `}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-3xl font-bold text-${currentFeature?.color}`}>
              {currentFeature?.title}
            </h2>
            <Button
              variant="outline"
              size="small"
              onClick={onClose}
              className="w-10 h-10 p-0"
            >
              ✕
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <p className="text-gray-300 leading-relaxed mb-6">
                {currentFeature?.desc}
              </p>
              <Button variant="cyan" className="w-full">
                Experimente Agora
              </Button>
            </Card>

            <div className="bg-dark-panel p-6 rounded-xl flex items-center justify-center">
              <img
                src={currentFeature?.image}
                alt={currentFeature?.title}
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose} />
      )}
    </>
  );
};

export default FeatureSlider;
