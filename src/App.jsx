import { useState } from "react";
import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";
import { ContactSection } from "./components/ContactSection";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <BannerSection />
        <ContactSection />
    </div>
  )
}

export default App
