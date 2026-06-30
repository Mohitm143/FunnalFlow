import React from "react";
import aboutImg from "../assets/about.webp";

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Image */}
          <div>
            <img
              src={aboutImg}
              alt="O2Cure Air Purifier"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              About O2Cure
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Breathe Cleaner,
              <br />
              Live Healthier
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              O2Cure is committed to creating healthier indoor environments
              through advanced air purification technology. Our air purifiers
              effectively remove dust, allergens, smoke, bacteria, viruses,
              and harmful pollutants, ensuring every breath you take is fresh
              and clean.
            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              Designed with innovative filtration systems, energy-efficient
              performance, and elegant aesthetics, O2Cure products are ideal
              for homes, offices, hospitals, schools, and commercial spaces.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-blue-600">
                  99.97%
                </h3>

                <p className="mt-2 text-gray-600">
                  HEPA Filtration Efficiency
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-blue-600">
                  24/7
                </h3>

                <p className="mt-2 text-gray-600">
                  Continuous Air Protection
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-blue-600">
                  Smart
                </h3>

                <p className="mt-2 text-gray-600">
                  Real-Time Air Quality Monitoring
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-blue-600">
                  Eco
                </h3>

                <p className="mt-2 text-gray-600">
                  Energy Efficient Technology
                </p>
              </div>

            </div>

            {/* Button */}

            <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition duration-300">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;