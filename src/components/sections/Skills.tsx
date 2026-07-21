import SectionTitle from "@/components/SectionTitle";
import { skills } from "@/data/resume";

const CATEGORY_STYLES: Record<string, string> = {
  Languages: "from-blue-500 to-blue-700",
  Frameworks: "from-red-500 to-red-700",
  Databases: "from-emerald-500 to-emerald-700",
  Tools: "from-purple-500 to-purple-700",
  Certifications: "from-amber-500 to-amber-700",
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24">
      <SectionTitle>
        <span id="skills-heading">Skills</span>
      </SectionTitle>
      <div className="body-panel flex flex-col gap-6 rounded-2xl bg-white p-6 sm:p-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className={`skill-badge bg-gradient-to-r ${CATEGORY_STYLES[category] ?? "from-gray-500 to-gray-700"}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
