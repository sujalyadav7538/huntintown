export default function TestimonialCard({ quote, name }) {
  return (
    <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6">
      <p className="text-gray-300 leading-relaxed text-sm">{quote}</p>

      <div className="flex items-center gap-3 mt-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700" />

        <div>
          <h4 className="font-medium">{name}</h4>

          <span className="text-xs text-gray-500">Community Member</span>
        </div>
      </div>
    </div>
  );
}
