import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="site-surface min-h-screen bg-white text-black">
      <Navbar />
      <main
        id="main-content"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-3 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_320px]"
      >
        <div className="flex flex-col gap-12">
          <Home />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
        <Sidebar />
      </main>
      <footer className="mx-auto max-w-7xl px-3 pb-8 text-center text-sm text-gray-500 sm:px-6">
        © {new Date().getFullYear()} Srinesh Ganesh. Built with Next.js.
      </footer>
    </div>
  );
}
