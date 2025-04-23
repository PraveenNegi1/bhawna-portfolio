import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contect from "@/components/Contect";
import Experience from "@/components/Experience";
import Experience2 from "@/components/Experience2";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function App() {
  return (
    <>
      <div>
        <Home />
        <About/>
        <Certifications/>
        <Experience/>
        <Experience2/>
        <Skills/>
        <Achievements />
        <Testimonials />
        <Contect />
      </div>
    </>
  );
}
