export default function TrustedUsers() {
  return (
    <section className="py-12">
      <div className="flex flex-col items-center">
        <p className="text-gray-400 mb-6">
          Trusted by 12,000+ people across the city
        </p>

        <div className="flex -space-x-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-900 border-2 border-black"
            />
          ))}
        </div>
      </div>
    </section>
  );
}