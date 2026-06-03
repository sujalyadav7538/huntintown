import TestimonialCard from "./TestimonialCard";
import Button from "@/components/Button";

export default function SuccessStories() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Success Stories
          </h2>

          <p className="text-gray-400 mt-3">
            Trusted by thousands across the city.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <TestimonialCard
            name="Sahil Verma"
            quote="I found a trusted furniture maker within hours. The process was smooth and transparent."
          />

          <TestimonialCard
            name="Aman Gupta"
            quote="Posting my requirement helped me connect with multiple vendors and compare prices easily."
          />

          <TestimonialCard
            name="Emma D'Souza"
            quote="The platform made it easy to discover local professionals and get quality work done."
          />

        </div>

        <div className="flex justify-center mt-12">
          <Button
            text="Learn More"
            variant="outline"
          />
        </div>

      </div>
    </section>
  );
}