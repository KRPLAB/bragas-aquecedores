import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";
import { ServicesCatalogSection } from "./components/ServicesCatalogSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export const App = () => {

  return (
    <div className="App">
      <Header />
      <BannerSection />
      <ServicesCatalogSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}