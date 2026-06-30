import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "New Delhi",
    review:
      "O2 Cure has completely changed the air quality in my home. My allergies have reduced and the purifier runs silently.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    city: "Noida",
    review:
      "The purifier removes dust and odors amazingly well. Highly recommended for every family.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Amit Singh",
    city: "Gurgaon",
    review:
      "Easy installation, elegant design and excellent purification performance.",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const stats = [
  {
    number: "20K+",
    title: "Happy Customers",
  },
  {
    number: "4.9★",
    title: "Average Rating",
  },
  {
    number: "98%",
    title: "Customer Satisfaction",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute -top-24 -left-20 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.7}}
          viewport={{once:true}}
          className="text-center"
        >

          <p className="uppercase tracking-widest text-cyan-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Trusted by thousands of families for cleaner,
            healthier and fresher indoor air.
          </p>

        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:.3}}
          viewport={{once:true}}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >

          {stats.map((item,index)=>(

            <motion.div
              key={index}
              whileHover={{scale:1.05}}
              className="backdrop-blur-xl bg-white/60 rounded-3xl shadow-lg p-8 text-center border border-white"
            >

              <h2 className="text-5xl font-bold text-cyan-600">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-700">
                {item.title}
              </p>

            </motion.div>

          ))}

        </motion.div>

        {/* Testimonials */}

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {testimonials.map((item,index)=>(

            <motion.div
              key={item.id}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*.2}}
              viewport={{once:true}}
              whileHover={{
                y:-10,
                scale:1.03
              }}
              className="relative backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white shadow-xl"
            >

              <div className="absolute top-6 right-6 text-7xl text-cyan-100">
                "
              </div>

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.city}
                  </p>

                </div>

              </div>

              <div className="flex mt-6 mb-5">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />
                ))}

              </div>

              <p className="text-gray-700 leading-8 italic">
                {item.review}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}