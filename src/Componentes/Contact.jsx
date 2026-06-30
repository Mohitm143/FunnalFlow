import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <Phone size={30} />,
    title: "Phone",
    value: "+91 98765 43210",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Mail size={30} />,
    title: "Email",
    value: "support@o2cure.com",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: <MapPin size={30} />,
    title: "Address",
    value: "Sector 62, Noida, Uttar Pradesh",
    color: "bg-green-100 text-green-600",
  },
];

export default function Contact() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50">

      {/* Background Blur */}

      <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-cyan-300/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-300/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[4px] text-cyan-600 font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold mt-5">
            We'd Love To Hear From You
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-8">
            Have questions about O2 Cure products?
            Our experts are always ready to help.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {contactInfo.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  x: 12,
                  scale: 1.02,
                }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl flex items-center gap-6"
              >

                <div className={`p-5 rounded-2xl ${item.color}`}>
                  {item.icon}
                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {item.value}
                  </p>

                </div>

              </motion.div>

            ))}
                        {/* Social Media */}

            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-6">
                Follow Us
              </h3>

              <div className="flex gap-5">

                {[
                  [
  <FaFacebookF size={22} />,
  <FaInstagram size={22} />,
  <FaLinkedinIn size={22} />,
  <FaTwitter size={22} />,
]
                ].map((icon, index) => (

                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition"
                  >
                    {icon}
                  </motion.a>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10"
          >

            <h3 className="text-3xl font-bold mb-8">
              Send Us A Message
            </h3>

            <form className="space-y-6">

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0px 15px 35px rgba(8,145,178,.35)",
                }}
                whileTap={{
                  scale: .97,
                }}
                className="w-full py-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold transition"
              >
                Send Message →
              </motion.button>

            </form>

          </motion.div>

        </div>

        {/* Google Map */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl"
        >

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Sector+62+Noida&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>

        </motion.div>

      </div>

    </section>
  );
}