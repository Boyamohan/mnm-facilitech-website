export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="card-base h-full">
      <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3 text-brand-primary">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-semibold text-brand-dark">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}
