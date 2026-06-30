import { motion } from "framer-motion";

const features = [
  {
    title: "Advanced Air Purification",
    description:
      "Removes dust, smoke, pollen, allergens and PM2.5 particles to deliver cleaner and healthier indoor air.",
    image:
      "https://picsum.photos/seed/airpurifier/600/400",
  },
  {
    title: "HEPA H13 Filtration",
    description:
      "Captures up to 99.97% of airborne pollutants including bacteria and microscopic particles.",
    image:
      "https://picsum.photos/seed/hepa/600/400",
  },
  {
    title: "Healthy Family Protection",
    description:
      "Provides a healthier indoor environment for children, adults and senior citizens.",
    image:
      "https://picsum.photos/seed/family/600/400",
  },
  {
    title: "Ultra Silent Operation",
    description:
      "Operates with minimal noise, making it ideal for bedrooms, offices and study rooms.",
    image:
      "https://picsum.photos/seed/bedroom/600/400",
  },
  {
    title: "Energy Efficient",
    description:
      "Consumes less electricity while maintaining powerful air purification performance.",
    image:
      "https://picsum.photos/seed/eco/600/400",
  },
  {
    title: "Smart Air Quality Control",
    description:
      "Automatically adjusts purification speed based on indoor air quality.",
    image:
      "https://picsum.photos/seed/smart/600/400",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 uppercase tracking-widest font-semibold">
            Why Choose O2 Cure
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Breathe Cleaner. Live Healthier.
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            Experience next-generation air purification technology that creates
            a healthier and fresher indoor environment for your family.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-cyan-300/40 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>

                <button className="mt-6 text-cyan-600 font-semibold hover:text-cyan-800 transition">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}