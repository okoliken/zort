import { NavBar } from "./components/ui/Navbar";
import { Hero } from "./components/sections/Hero";
import { RealTimeBoard } from "./components/sections/RealTimeBoard";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Support } from "./components/sections/Support";
import { Footer } from "./components/sections/Footer";
import { StatsTicker } from "./components/ui/StatsTicker";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <RealTimeBoard />
      <Features />
      <HowItWorks />
      <Support />
      <Footer />
      <StatsTicker />
    </>
  );
}

export default App;
