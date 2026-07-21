import { profile } from "@/data/resume";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a11.25 11.25 0 0 1-5.135-5.135l1.293-.97a1.125 1.125 0 0 0 .417-1.173L8.963 3.102a1.125 1.125 0 0 0-1.091-.852H6.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-.83.67-1.5 1.5-1.5h16.5c.83 0 1.5.67 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 6.5 9 6.25L21 6.5" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.6v1.7h.05c.5-.9 1.7-1.85 3.5-1.85 3.75 0 4.45 2.35 4.45 5.4V21h-4v-5.7c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.45-2.2 3v5.8H9z" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.17-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.12-4.56-4.99 0-1.1.38-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.3 9.3 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.88-2.35 4.73-4.58 4.98.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

export default function Sidebar() {
  return (
    <aside
      aria-label="Contact and social links"
      className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start"
    >
      <div className="sidebar-panel rounded-2xl bg-gray-100 p-6">
        <h2 className="text-sm font-bold tracking-wide text-black">Contact</h2>
        <ul className="mt-4 flex flex-col gap-3 text-sm text-black">
          <li className="flex items-center gap-2">
            <PhoneIcon />
            <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`} className="hover:underline">
              {profile.phone}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MailIcon />
            <a href={`mailto:${profile.email}`} className="break-all hover:underline">
              {profile.email}
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebar-panel rounded-2xl bg-gray-100 p-6">
        <h2 className="text-sm font-bold tracking-wide text-black">Social Links</h2>
        <ul className="mt-4 flex flex-col gap-3 text-sm text-black">
          <li className="flex items-center gap-2">
            <LinkedInIcon />
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {profile.linkedin}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <GithubIcon />
            <a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {profile.github}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
