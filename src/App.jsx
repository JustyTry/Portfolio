import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#66FCF1]">
      <Header />
      <About />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
