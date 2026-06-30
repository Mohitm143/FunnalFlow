import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Contact Us
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Phone className="text-blue-600" size={30} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Phone
                  </h4>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Mail className="text-blue-600" size={30} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    support@o2cure.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-5">
                <div className="bg-blue-100 p-4 rounded-full">
                  <MapPin className="text-blue-600" size={30} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Address
                  </h4>

                  <p className="text-gray-600">
                    Sector 62,
                    <br />
                    Noida, Uttar Pradesh,
                    <br />
                    India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;