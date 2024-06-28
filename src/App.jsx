import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" bg-[#080808] min-h-screen text-[#66FCF1]">
      <Header />
      <About />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
