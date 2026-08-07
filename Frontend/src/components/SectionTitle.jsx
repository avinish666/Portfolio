export default function SectionTitle({ title, highlight }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        {title} <span className="text-blue-500">{highlight}</span>
      </h2>
    </div>
  );
}