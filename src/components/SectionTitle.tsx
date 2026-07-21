export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-title-box mb-8 rounded-2xl bg-gray-200 px-6 py-5 sm:px-8 sm:py-6">
      <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
