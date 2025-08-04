import React from "react";
import { useRef, useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cardSifina from "../assets/img/card-sifina.png";
import bgCard from "../assets/img/bg-card.svg";
import BubbleBg from "../assets/img/bubble-bg.svg";
import CustomerCenter from "../assets/img/cs.svg";
import Card from "../assets/img/kontak.svg";

const Kontak = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-white">
        <Navbar />
        {/* SECTION KONTAK SIFINA */}
        <section className="bg-white py-17 relative overflow-hidden">
          <div className="relative z-10 bg-sky-100 px-5 py-5 flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto rounded-xl shadow-sm">
            {/* Ornamen background kiri atas */}
            <img
              src={bgCard}
              alt="Ornamen"
              className="absolute top-0 right-0 w-48 opacity-70 pointer-events-none z-0"
            />
            {/* Gambar */}
            <div className="w-full lg:w-1/2 flex self-end">
              <img
                src={Card}
                alt="Card SIFina"
                className="w-[450px] h-auto object-contain"
              />
            </div>

            {/* Teks Definisi */}
            <div className="w-full lg:w-1/2 text-gray-800">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 lg:px-15">
                Kontak SIFina <br />
                Bank Sumsel Babel
              </h1>
              <div className="space-y-4 text-base text-justify leading-relaxed lg:px-15">
                <p>
                  Izinkan kami untuk menyambut anda ke dunia kenyamanan
                  perbankan. Ada berbagai cara bagi anda untuk mendapatkan
                  informasi lebih lanjut mengenai Bank SUMSEL BABEL, dan kami
                  akan senang untuk membantu anda dalam setiap cara yang
                  mungkin.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-t border-gray-200 my-8" />

        {/* Background Bubble */}
        <img
          src={BubbleBg}
          alt="Bubble background"
          className="w-full absolute left-1/2 -translate-x-1/2 opacity-40 z-20 pointer-events-none"
        />

        {/* Section : CALL CENTER DAN ALAMAT */}
        <section className="bg-white py-16">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* CALL CENTER */}
              <div className="relative bg-sky-200 p-6 px-10 py-15 rounded-xl shadow-sm w-full lg:w-1/2 flex items-start gap-10">
                {/* Gambar CS */}
                <div className="flex-shrink-0">
                  <img
                    src={CustomerCenter}
                    alt="Call Center Agent"
                    className="rounded-xl w-40 h-auto object-cover"
                  />
                </div>

                {/* Konten */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Call Center Support</h2>

                  {/* Telepon */}
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-3 rounded-lg text-sky-600 text-2xl">
                      <FiPhone />
                    </div>
                    <div className="text-gray-700 text-sm">
                      <span className="font-semibold">
                        Customer Care Hotline
                      </span>
                      <div>1500711</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-3 rounded-lg text-sky-600 text-2xl">
                      <FiMail />
                    </div>
                    <div className="text-gray-700 text-sm">
                      <span className="font-semibold">Customer Care Email</span>
                      <div>contactcenter@banksumselbabel.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KANTOR PUSAT */}
              <div className="bg-sky-100 p-6 px-10 py-15 gap-10 rounded-xl shadow-sm w-full lg:w-1/2">
                <h2 className="text-xl font-semibold mb-3">Kantor Pusat</h2>
                <p className="text-sm mb-5">
                  Jl. Gubernur H.Ahmad Bastari No. 7 Kel. Silaberanti Kec.
                  Seberang Ulu I Jakabaring Palembang
                </p>
                <h2 className="text-xl font-semibold mb-3">Hubungi Kami</h2>
                <div className="flex items-center gap-3 text-sky-400 mb-2 text-sm">
                  <FiPhone />
                  <p className="text-gray-900">0711 - 5228080</p>
                </div>
                <div className="flex items-center gap-3 text-sky-400 text-sm">
                  <FiMail />
                  <p className="text-gray-900">
                    contactcenter@banksumselbabel.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: LOKASI GOOGLE MAPS */}
        <section className="py-10 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Lokasi <span className="text-sky-500">Kantor Pusat</span>
            </h2>
            <p className="text-gray-700 text-md mb-6">
              Bank Sumsel Babel Kantor Pusat - Jakabaring, Jl. Gub H Bastari
              No.7, Silaberanti, Kecamatan Seberang Ulu I, <br />
              Kota Palembang, Sumatera Selatan 30967
            </p>

            <div className="w-full md:w-[100%] lg:w-[100%] h-[600px] mx-auto rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Lokasi Bank Sumsel Babel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.291547479222!2d104.77878707449567!3d-3.0161089399625896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9de9362a2917%3A0xfab8b65db166703d!2sBank%20Sumsel%20Babel%20Kantor%20Pusat!5e0!3m2!1sid!2sid!4v1753934216468!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <Tabs/>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Kontak;
