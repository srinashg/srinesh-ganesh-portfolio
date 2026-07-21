import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24">
      <SectionTitle>
        <span id="projects-heading">Projects</span>
      </SectionTitle>
      <div className="body-panel flex flex-col gap-8 rounded-2xl bg-white p-6 sm:p-8">
        {projects.map((project) => (
          <article key={project.name} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-xl font-bold text-black sm:text-2xl">{project.name}</h3>
              <span className="text-sm font-semibold text-blue-700 sm:text-base">{project.dates}</span>
            </div>
            <p className="mt-1 font-semibold text-black">{project.org}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {project.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-black sm:text-base">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
