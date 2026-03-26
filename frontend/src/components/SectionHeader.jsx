export default function SectionHeader({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight text-brand-dark md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
