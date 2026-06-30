import React from 'react'
const airPurifiers = [
  {
    id: 1,
    name: "Smart Air Purifier X1",
    image: "https://images.philips.com/is/image/philipsconsumer/vrs_5058815a6efdee1b2596d283f548c32a8097fe9c?wid=700&hei=700&$pnglarge$",
    price: "₹9,999",
    rating: "4.8",
  },
  {
    id: 2,
    name: "Pure Breeze Pro",
    image: "https://www.portronics.com/cdn/shop/files/portronics_air_x_home_smart_air_purifier.jpg?v=1774875660",
    price: "₹12,499",
    rating: "4.6",
  },
  {
    id: 3,
    name: "FreshFlow Max",
    image: "https://americanmicronic.in/cdn/shop/files/71CIH22fmBL._SL1500.jpg?v=1723608261&width=2048",
    price: "₹15,999",
    rating: "4.9",
  },
  {
    id: 4,
    name: "Eco Air Shield",
    image: "https://ankurelectricals.com/cdn/shop/files/1_d0ffaf2b-3570-47e1-9133-485770b6582f.png?v=1761825401",
    price: "₹8,499",
    rating: "4.5",
  },
];

export default function AirPurifiers() {
  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">
          Air Purifiers
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {airPurifiers.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className=" h-80 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold">{item.name}</h2>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-2xl font-bold text-blue-600">
                    {item.price}
                  </span>

                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm font-medium">
                    ⭐ {item.rating}
                  </span>
                </div>

                <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
              
            </div>
          ))}
        </div>
        <button onClick={() => window.location.href = "/Benifits"} className="w-full mt-5 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition text-2xl">
          Benefits of Air Purifiers
        </button>
      </div>
    </section>
  );
}
  