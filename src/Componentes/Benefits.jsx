import React from "react";
import {
  Wind,
  ShieldCheck,
  HeartPulse,
  Leaf,
  Moon,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: <Wind size={40} />,
    title: "Removes Air Pollutants",
    description:
      "Filters dust, smoke, pollen, and harmful airborne particles to provide cleaner indoor air.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={40} />,
    title: "Eliminates Germs",
    description:
      "Captures bacteria, viruses, and allergens to create a healthier living environment.",
  },
  {
    id: 3,
    icon: <HeartPulse size={40} />,
    title: "Supports Better Health",
    description:
      "Helps reduce allergies, asthma triggers, and breathing discomfort.",
  },
  {
    id: 4,
    icon: <Leaf size={40} />,
    title: "Fresh & Odor-Free Air",
    description:
      "Removes unpleasant smells from cooking, pets, and smoke while keeping the air fresh.",
  },
  {
    id: 5,
    icon: <Moon size={40} />,
    title: "Improves Sleep Quality",
    description:
      "Cleaner air can lead to more comfortable breathing and better sleep at night.",
  },
  {
    id: 6,
    icon: <Sparkles size={40} />,
    title: "Healthier Home",
    description:
      "Creates a cleaner indoor environment for children, adults, and elderly family members.",
  },
];

const Benefits = () => {
  return (
    <section className="py-10 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800">
            Benefits of Air Purifiers
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Improve your indoor air quality and enjoy a healthier lifestyle
            with advanced air purification technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;