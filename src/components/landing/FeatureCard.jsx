export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-white">{title}</h3>

        <p className="text-gray-400 text-sm mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
