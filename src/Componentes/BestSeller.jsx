import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "O2 Cure Aura",
    price: "₹8,999",
    image: "https://jsbhealthcare.co.in/cdn/shop/files/Air_Purifier_for_Home_Room_JSB_HF123.jpg?v=1742103520",
    rating: 5,
  },
  {
    id: 2,
    name: "O2 Cure Smart Pro",
    price: "₹11,999",
    image: "https://havells.com/media/catalog/product/cache/a68cd95282f629852e6b9e296b7a5618/2/5/250_2_1.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "O2 Cure Elite",
    price: "₹14,999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaaw6BTOSIfBG1yXJf0z6hGDj9bMk9BSVi5pN98Ot-A8XSeEaJIdm3M4Y&s=10",
    rating: 5,
  },
  {
    id: 4,
    name: "O2 Cure Home+",
    price: "₹9,499",
    image: "https://www.portronics.com/cdn/shop/files/portronics_air_x_home_smart_air_purifier.jpg?v=1774875660",
    rating: 5,
  },
  {
    id: 5,
    name: "O2 Cure HEPA Max",
    price: "₹15,999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_lmqQl7BYSJo0WSpckHJ9BWeJgts5-ov_UEd-JaC8UPcuw-w0OFbueZv&s=10",
    rating: 5,
  },
  {
    id: 6,
    name: "O2 Cure Fresh",
    price: "₹10,999",
    image: "https://americanmicronic.in/cdn/shop/files/71CIH22fmBL._SL1500.jpg?v=1723608261&width=2048",
    rating: 5,
  },
  {
    id: 7,
    name: "O2 Cure Pro Max",
    price: "₹18,499",
    image: "https://reffair.in/cdn/shop/files/LivAir_350_Listing_images_4.png?v=1769968301",
    rating: 5,
  },
  {
    id: 8,
    name: "O2 Cure Compact",
    price: "₹7,999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBfH2-cNnMUvA9nf30E6Ra0rS6eaWT2sNaouXRhwH1f3B_cl6kpmrkjc&s=10",
    rating: 5,
  },
  {
    id: 9,
    name: "O2 Cure Ultra",
    price: "₹16,499",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23l7Tw7xTmL0lviaFqgKG_HElEVHnxbyrHLqsmWGMIGB5nmg4-6n5bdM&s=10",
    rating: 5,
  },
  {
    id: 10,
    name: "O2 Cure Mini",
    price: "₹6,999",
    image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/specifications/home/air-treatment/purifiers/Web_897_Dynamic-Media_Specifications-Image.png?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=960",
    rating: 5,
  },
  {
    id: 11,
    name: "O2 Cure Premium",
    price: "₹19,999",
    image: "https://www.ugaoo.com/cdn/shop/files/1_6de529e9-d6e5-4ff4-b284-a6f07cbd218d.jpg?v=1733727791",
    rating: 5,
  },
  {
    id: 12,
    name: "O2 Cure X",
    price: "₹12,999",
    image: "https://img.tatacliq.com/images/i29/658Wx734H/MP000000029832331_658Wx734H_202601221115471.jpeg",
    rating: 5,
  },
];

export default function BestSeller() {
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
          <span className="text-cyan-600 uppercase tracking-[4px] font-semibold">
            Best Sellers
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Our Best Selling Air Purifiers
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-8">
            Experience advanced air purification technology trusted by
            thousands of families across India.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl group"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" mx-15 h-72 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Bestseller
                  </span>

                  <h3 className="text-2xl font-bold mt-4">
                    {product.name}
                  </h3>

                  <div className="flex mt-3">
                    {"★★★★★"}
                  </div>

                  <h2 className="text-3xl font-bold text-cyan-600 mt-4">
                    {product.price}
                  </h2>
                                    <p className="text-gray-600 mt-4 leading-7">
                    Advanced HEPA filtration removes 99.97% of airborne
                    pollutants including dust, smoke, pollen and allergens,
                    providing healthier indoor air.
                  </p>

                  <div className="flex gap-3 mt-8">
                    <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition duration-300">
                      Buy Now
                    </button>

                    <button className="flex-1 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white py-3 rounded-xl font-semibold transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}