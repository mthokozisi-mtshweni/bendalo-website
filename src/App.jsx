import { useEffect } from "react";
import { initAnimations } from "./animations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./App.css";

function App() {
  useEffect(() => {
    return initAnimations();
  }, []);

  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;