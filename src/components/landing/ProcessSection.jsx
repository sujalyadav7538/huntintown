import ProcessCard from "./ProcessCard";
import {
  PencilSquareIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function ProcessSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 ">
      <div className="bg-[#111111] rounded-3xl border border-gray-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800">

          <ProcessCard
            title="Post Your Need"
            description="Share what you need with the community."
            icon={<PencilSquareIcon className="w-7 h-7" />}
          />

          <ProcessCard
            title="Get Responses"
            description="Receive offers from verified people."
            icon={<ChatBubbleLeftRightIcon className="w-7 h-7" />}
          />

          <ProcessCard
            title="Choose Best"
            description="Compare and select the best option."
            icon={<CheckCircleIcon className="w-7 h-7" />}
          />

          <ProcessCard
            title="Work Done"
            description="Complete your work safely and quickly."
            icon={<ShieldCheckIcon className="w-7 h-7" />}
          />

        </div>
      </div>
    </section>
  );
}