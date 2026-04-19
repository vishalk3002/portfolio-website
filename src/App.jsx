import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
