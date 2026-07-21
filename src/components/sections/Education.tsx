import SectionTitle from "@/components/SectionTitle";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="scroll-mt-24">
      <SectionTitle>
        <span id="education-heading">Education</span>
      </SectionTitle>
      <div className="body-panel rounded-2xl bg-white p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <h3 className="text-xl font-bold text-black sm:text-2xl">{education.degree}</h3>
          <span className="text-sm font-semibold text-blue-700 sm:text-base">{education.dates}</span>
        </div>
        <div className="mt-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <p className="font-semibold text-black">{education.school}</p>
          <span className="text-sm text-gray-600">{education.location}</span>
        </div>
        <p className="mt-4 text-sm font-semibold text-black">Activities</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {education.activities.map((a) => (
            <li
              key={a}
              className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-black"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
