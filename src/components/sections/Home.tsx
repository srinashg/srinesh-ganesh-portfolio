import { profile } from "@/data/resume";

export default function Home() {
  return (
    <section id="home" aria-labelledby="home-heading" className="scroll-mt-24">
      <div className="body-panel rounded-2xl bg-white p-8 sm:p-12">
        <p className="mb-3 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Available for opportunities
        </p>
        <h1
          id="home-heading"
          className="text-4xl font-extrabold leading-tight text-black sm:text-5xl"
        >
          Hi, I&apos;m {profile.name}
        </h1>
        <p className="mt-3 text-xl font-semibold text-black sm:text-2xl">
          {profile.title}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black sm:text-lg">
          I build reliable, customer-facing software — from Spring Boot APIs powering
          supply-chain platforms to Next.js frontends and AI-assisted tooling.{" "}
          {profile.location}.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#experience" className="nav-pill nav-pill--active">
            VIEW EXPERIENCE
          </a>
          <a href="#contact" className="nav-pill nav-pill--inactive">
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}
