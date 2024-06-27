import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" bg-[#080808] min-h-screen">
      <Header />
      <About />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
