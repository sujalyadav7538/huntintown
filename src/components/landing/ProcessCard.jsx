export default function ProcessCard({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <div className="w-16 h-16 rounded-full bg-[#1F1F1F] flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-gray-400 mt-2 text-sm">{description}</p>
    </div>
  );
}
