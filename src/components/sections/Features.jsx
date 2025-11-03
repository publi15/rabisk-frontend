import React from "react";
import Card from "../ui/Card";
import {
  FaPlayCircle,
  FaCrosshairs,
  FaCog,
  FaLayerGroup,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const Features = ({ setIsFeatureOpen, setSelectedFeatureId }) => {
  // ← PROPS
  const features = [
    {
      id: "transform",
      icon: "play",
      title: "Transform Animation",
      desc: "Copie frames em SEGUNDOS",
      color: "accent-cyan",
    },
    {
      id: "attachment",
      icon: "crosshairs",
      title: "Attachment Controller",
      desc: "8 eixos + TURBO MODE",
      color: "accent-orange",
    },
    {
      id: "rig",
      icon: "cog",
      title: "Rig Compound",
      desc: "Rotação rítmica PRECISA",
      color: "accent-purple",
    },
    {
      id: "layer",
      icon: "layer",
      title: "Layer Rail",
      desc: "Timeline por CAMADA",
      color: "accent-magenta",
    },
    {
      id: "performance",
      icon: "rocket",
      title: "Alta Performance",
      desc: "ACELERAÇÃO 5x",
      color: "accent-green",
    },
    {
      id: "beginner",
      icon: "users",
      title: "Iniciante-Friendly",
      desc: "Interface SIMPLES",
      color: "accent-blue",
    },
  ];

  return (
    <section id="recursos" className="py-16 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-cyan">
          Recursos Principais
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => {
                setIsFeatureOpen(true); // ← LINHA 1
                setSelectedFeatureId(feature.id); // ← LINHA 2
              }}
              className="w-full focus:outline-none"
            >
              <Card className="text-center p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-accent-cyan cursor-pointer">
                <div
                  className={`text-4xl mb-4 text-${feature.color} flex justify-center items-center h-16 w-16 mx-auto`}
                >
                  {feature.icon === "play" && <FaPlayCircle />}
                  {feature.icon === "crosshairs" && <FaCrosshairs />}
                  {feature.icon === "cog" && <FaCog />}
                  {feature.icon === "layer" && <FaLayerGroup />}
                  {feature.icon === "rocket" && <FaRocket />}
                  {feature.icon === "users" && <FaUsers />}
                </div>
                <h3 className={`text-xl font-bold mb-2 text-${feature.color}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.desc}</p>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
