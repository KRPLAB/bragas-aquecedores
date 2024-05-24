import { useState } from "react";
import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";
import { ContactSection } from "./components/ContactSection";
import { ServicesCatalogSection } from "./components/ServicesCatalogSection";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <BannerSection />
        <ServicesCatalogSection />
        <ContactSection />
    </div>
  )
}

export default App
