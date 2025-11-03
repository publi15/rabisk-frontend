import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import FeatureSlider from "./components/sections/FeatureSlider";
import Testimonial from "./components/sections/Testimonial";
import Plans from "./components/sections/Plans";
import Support from "./components/sections/Support";
import About from "./components/sections/About";
import Steps from "./components/sections/Steps";
import Footer from "./components/Footer";
import DownloadSlider from "./components/sections/DownloadSlider";

function App() {
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  // ✅ ADICIONE ESTE ESTADO
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  // ✅ ADICIONE ESTAS 2 LINHAS
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [selectedFeatureId, setSelectedFeatureId] = useState(null);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header onOpenPlans={() => setIsPlansOpen(true)} />

      {/* HERO CORRIGIDO */}
      <Hero onOpenDownload={() => setIsDownloadOpen(true)} />

      {/* ✅ ADICIONE ESTA LINHA */}
      <FeatureSlider
        isOpen={isFeatureOpen}
        onClose={() => {
          setIsFeatureOpen(false);
          setSelectedFeatureId(null);
        }}
        featureId={selectedFeatureId}
      />
      <Features
        setIsFeatureOpen={setIsFeatureOpen}
        setSelectedFeatureId={setSelectedFeatureId}
      />
      <FeatureSlider />
      <Testimonial />
      <Plans />
      <Support />
      <About />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
