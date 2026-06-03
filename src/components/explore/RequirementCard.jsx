import { FiMapPin, FiBookmark } from "react-icons/fi";



export default function RequirementCard({
  initials,
  name,
  location,
  time,
  badge,
  title,
  description,
  tags,
  responses,
}) {
  return (
    <div
      className="
        bg-[#111111]
        border
        border-gray-800
        rounded-2xl
        p-4 md:p-5
        hover:border-red-500/30
        transition-all
        duration-300
      "
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-bold shrink-0">
            {initials}
          </div>

          <div>
            <p className="text-white font-semibold text-sm">
              {name}
            </p>

            <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
              <FiMapPin className="w-3 h-3" />
              {location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-xs">
            {time}
          </span>

          {badge && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-md">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-white text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              text-xs
              px-3
              py-1
              rounded-full
              bg-[#1a1a1a]
              border
              border-gray-700
              text-gray-400
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <span className="text-gray-500 text-sm">
          💬 {responses} Responses
        </span>

        <div className="flex items-center gap-2">
          <button
            className="
              p-2
              rounded-lg
              bg-[#1a1a1a]
              border
              border-gray-800
              hover:border-gray-600
            "
          >
            <FiBookmark />
          </button>

          <button
            className="
              bg-red-600
              hover:bg-red-700
              text-white
              text-sm
              px-4
              py-2
              rounded-lg
              transition-colors
            "
          >
            Offer Help
          </button>
        </div>
      </div>
    </div>
  );
}