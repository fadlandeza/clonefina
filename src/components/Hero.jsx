import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import astronout1 from "../assets/img/astronout1.jpeg";
import astronout2 from "../assets/img/astronout2.jpeg"
import astronout3 from "../assets/img/astronout3.jpeg"

const App = () => {
  return (
    <div className="min-h-screen bg-amber-50 font-sans p-6">
      {/* <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-4">
          <button className="bg-orange-400 text-white px-4 py-2 rounded-full">
            Menu
          </button>
          <div className="flex gap-2 text-sm text-gray-600">
            <span>EN</span>
            <span>FR</span>
            <span>DE</span>
          </div>
        </div>
      </header> */}

      <main className="grid grid-cols-2 lg:grid-cols-1 gap-5">
        <div>
          <section className="relative">
            <div className="rounded-3xl overflow-hidden relative">
              <img
                src={astronout3}
                alt="Astronaut in flowers"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="bg-white rounded-full w-40 p-2 shadow-md flex items-center justify-end">
                  <FaSearch className="text-gray-600 text-xl" />
                </button>
                <button className="bg-white rounded-full p-2 shadow-md flex items-center justify-center">
                  <FaUserCircle className="text-gray-600 text-2xl" />
                </button>

 
              </div>
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <button className="bg-white text-black w-10 h-10 rounded-full">
                  01
                </button>
                <button className="bg-orange-500 text-white w-10 h-10 rounded-full">
                  02
                </button>
                <button className="bg-orange-900 text-white w-10 h-10 rounded-full">
                  03
                </button>
              </div>

              <div className="absolute left-1/2 -bottom-24 -translate-x-1/2 flex justify-center items-center text-center shadow-4xl">
                <div className="flex w-50 h-50 bg-amber-50 rounded-t-full"></div>
              </div>
            </div>
          </section>

          {/* Tombol Bulat */}
          <div className="absolute left-1/2 top-146 -translate-x-1/2 flex justify-center items-center text-center shadow-4xl">
            <div className="flex w-42 h-42 bg-orange-200 rounded-full shadow-xl"></div>
          </div>
        </div>

        <section className="flex flex-col gap-6">
          <div className="flex justify-end">
            <div
              className="w-1/3 p-6 rounded-3xl shadow-2xl relative overflow-hidden"
              style={{
                backgroundImage: `url(${astronout1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="relative z-10">
                <h2 className="text-sm text-white mb-2">01</h2>
                <h3 className="text-xl text-white font-semibold">Jupiter</h3>
                <p className="text-white text-sm">
                  Jupiter is the fifth planet from the Sun and the largest in
                  the Solar System.
                </p>
                <button className="mt-2 flex items-center gap-2 text-orange-600">
                  More <BsArrowRightShort size={20} />
                </button>
              </div>
              <div className="absolute inset-0 bg-white/15 z-0" />
            </div>
          </div>

          <div className="flex justify-end">
            <div
              className="w-1/3 p-6 rounded-3xl shadow-2xl relative overflow-hidden"
              style={{
                backgroundImage: `url(${astronout2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="relative z-10">
                <h2 className="text-sm text-white mb-2">02</h2>
                <h3 className="text-xl text-white font-semibold">Neptune</h3>
                <p className="text-white text-sm">
                  Neptune is the eighth planet from the Sun and the farthest
                  known planet in the Solar System.
                </p>
                <button className="mt-2 flex items-center gap-2 text-orange-600">
                  More <BsArrowRightShort size={20} />
                </button>
              </div>
              <div className="absolute inset-0 bg-white/10 z-0" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-orange-100 p-4 rounded-2xl text-center">
              <p className="font-bold text-orange-900">
                Journey to the Red Planet
              </p>
            </div>
            <div className="bg-orange-100 p-4 rounded-2xl text-center">
              <p className="font-bold text-orange-900">
                Unleash Your Inner Astronaut
              </p>
            </div>
            <div className="bg-orange-100 p-4 rounded-2xl text-center">
              <p className="font-bold text-orange-900">
                Ultimate Guide to Interplanetary Travel
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 flex justify-center gap-6 text-gray-600">
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </footer>
    </div>
  );
};

export default App;
