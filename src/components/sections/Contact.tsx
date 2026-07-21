import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/resume";

const CONTACT_LINKS = [
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: profile.linkedin, href: `https://${profile.linkedin}` },
  { label: "GitHub", value: profile.github, href: `https://${profile.github}` },
  { label: "Website", value: profile.website, href: `https://${profile.website}` },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
      <SectionTitle>
        <span id="contact-heading">Contact</span>
      </SectionTitle>
      <div className="body-panel rounded-2xl bg-white p-6 sm:p-8">
        <p className="mb-6 text-base text-black sm:text-lg">
          Interested in working together, or just want to say hi? Reach out through
          any of the channels below.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col rounded-xl bg-gray-100 p-4 transition-colors hover:bg-gray-200"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-gray-600">
                  {link.label}
                </span>
                <span className="mt-1 text-sm font-semibold text-black sm:text-base">
                  {link.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
