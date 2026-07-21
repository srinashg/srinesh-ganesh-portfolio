import SectionTitle from "@/components/SectionTitle";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24">
      <SectionTitle>
        <span id="experience-heading">Professional Experience</span>
      </SectionTitle>
      <div className="body-panel flex flex-col gap-8 rounded-2xl bg-white p-6 sm:p-8">
        {experience.map((job) => (
          <article key={`${job.company}-${job.dates}`} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-xl font-bold text-black sm:text-2xl">{job.role}</h3>
              <span className="text-sm font-semibold text-blue-700 sm:text-base">{job.dates}</span>
            </div>
            <div className="mt-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <p className="font-semibold text-black">{job.company}</p>
              <span className="text-sm text-gray-600">{job.location}</span>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-black sm:text-base">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
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
