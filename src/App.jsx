import Academy from "./components/academy";
import Competence from "./components/competence";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Header from "./components/header";
import Intro from "./components/intro";

function App() {
  return (
    <div className="main">
      <Header />
      <Intro />
      <Experience />
      <Competence />
      <Academy />
      <Contact />
      <div className="bubble_animation">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </div>
  );
}

export default App;
