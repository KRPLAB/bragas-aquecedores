import { useState } from "react";
import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";
import { ContactSection } from "./components/ContactSection";
import { ServicesCatalogSection } from "./components/ServicesCatalogSection";
import { Footer } from "./components/Footer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <BannerSection />
        <ServicesCatalogSection />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default App
