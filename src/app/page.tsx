import {Footer, Navbar} from "@/components/ui";
import {Hero, About, Contact} from "@/components/page";
import {StarsCanvas} from "@/components/canvas";

export default function Home() {
  return (
      <div
          className="relative z-0 bg-primary">
        <div
            className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-2"
        >
          <Navbar initHidden />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
  );
}
