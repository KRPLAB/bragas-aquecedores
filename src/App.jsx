import { useState } from "react";
import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <BannerSection />
    </div>
  )
}

export default App
