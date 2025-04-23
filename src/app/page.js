import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contect from "@/components/Contect";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Mymantra from "@/components/Mantra";
import Skills from "@/components/Skills";

export default function App() {
  return (
    <>
      <div>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Mymantra />
        <Certifications />
        <Contect />
      </div>
    </>
  );
}
