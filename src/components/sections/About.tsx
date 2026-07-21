import SectionTitle from "@/components/SectionTitle";
import { about } from "@/data/resume";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
      <SectionTitle>
        <span id="about-heading">About Me</span>
      </SectionTitle>
      <div className="body-panel rounded-2xl bg-white p-6 sm:p-8">
        <p className="text-base leading-relaxed text-black sm:text-lg">
          {about.summary}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {about.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-gray-50 p-3 text-sm text-black sm:text-base"
            >
              <span
                aria-hidden="true"
                className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-red-500"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
