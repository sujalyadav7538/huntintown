import FeatureCard from "./FeatureCard";
import {
  UserCircleIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function KeyFeatures() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">
            Key Features
          </h2>

          <p className="text-gray-400 mt-3">
            Everything you need to connect with the right people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <FeatureCard
            icon={<UserCircleIcon className="w-6 h-6" />}
            title="Verified Profiles"
            description="Connect with genuine people through verified accounts and trusted community reviews."
          />

          <FeatureCard
            icon={<Squares2X2Icon className="w-6 h-6" />}
            title="Smart Dashboard"
            description="Track requirements, responses and communication from one centralized dashboard."
          />

          <FeatureCard
            icon={<Cog6ToothIcon className="w-6 h-6" />}
            title="Automated Matching"
            description="Get matched with relevant professionals based on your requirement."
          />

          <FeatureCard
            icon={<MagnifyingGlassIcon className="w-6 h-6" />}
            title="Advanced Search"
            description="Discover people and services faster with filters and intelligent recommendations."
          />
        </div>
      </div>
    </section>
  );
}