import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="h-[calc(100vh-64px)] overflow-y-scroll scroll-smooth">
        <Main />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
