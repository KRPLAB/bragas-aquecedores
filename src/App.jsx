import { useState } from "react";
import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";
import { ContactSection } from "./components/ContactSection";
import { ServicesCatalogSection } from "./components/ServicesCatalogSection";
import { Footer } from "./components/Footer";
import { AboutSection } from "./components/AboutSection";
import "swiper/css/bundle";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Header />
        <BannerSection />
        <ServicesCatalogSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
