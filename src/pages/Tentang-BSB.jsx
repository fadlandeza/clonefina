import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import ManajemenSection from "../components/ManajemenSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assets
import struktur from "../assets/img/struktur.jpeg";
import bgCard from "../assets/img/bg-card.svg";
import bgFooter from "../assets/img/bg-footer.png";
import BubbleBg from "../assets/img/bubble-bg.svg";
import FiturIcon1 from "../assets/img/fitur-1.svg";
import FiturIcon2 from "../assets/img/fitur-2.svg";
import FiturIcon3 from "../assets/img/fitur-3.svg";
import FiturIcon4 from "../assets/img/fitur-4.svg";
import FiturIcon5 from "../assets/img/fitur-5.svg";

// Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

// Visi Misi
const visiMisi = [
  "Mengelola ekosistem keuangan daerah & mitra bisnis secara terintegrasi dan bekelanjutan.",
  "Memberi solusi produk & layanan perbankan dengan pola kemitraan berkelanjutan melalui pengembangan kapabilitas sesuai tantangan bisnis.",
  "Menjadi penggerak perekonomian daerah menuju Indonesia sejahtera.",
];

const icons = [
  { src: FiturIcon1, size: "w-20 sm:w-20" },
  { src: FiturIcon2, size: "w-25 sm:w-25" },
  { src: FiturIcon3, size: "w-18 sm:w-18" },
  { src: FiturIcon4, size: "w-20 sm:w-20" },
  { src: FiturIcon5, size: "w-16 sm:w-16" },
];

const TentangBSB = () => {
  const iconsRef = useRef([]);

  // Definisikan section yang ingin di animasikan
  const sejarahRef = useRef(null);
  const backgroundRef = useRef(null);
  const visimisiRef = useRef(null);
  const strukturRef = useRef(null);

  useEffect(() => {
    iconsRef.current.forEach((el, i) => {
      gsap.to(el, {
        y: -30,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1,0.3)",
        delay: i * 0.2,
      });
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    useEffect(() => {
    const sections = [
      { ref: sejarahRef, y: 50 },
      { ref: backgroundRef, y: 50 },
      { ref: visimisiRef, y: 50 },
      { ref: strukturRef, y: 50 },
    ];

    sections.forEach(({ ref, y }) => {
      if (ref.current) {
        gsap.from(ref.current, {
          y,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="bg-white">
        <Navbar />

        {/* Section : Sejarah */}
        <section ref={sejarahRef} className="bg-white py-17 relative overflow-hidden">
          <div className="relative z-10 bg-sky-100 flex flex-col lg:flex-row items-center px-10 py-15 gap-10 max-w-screen-xl mx-auto rounded-xl shadow-sm">
            {/* Ornamen background kiri atas */}
            <img
              src={bgCard} // ganti dengan path gambarnya, misalnya: "/assets/img/bubble-left.png"
              alt="Ornamen"
              className="absolute top-0 right-0 w-48 opacity-70 pointer-events-none z-0"
            />
            {/* Gambar */}
            <div className="w-full lg:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-lg">
              <ImageSlider />
            </div>

            {/* Teks Sejarah */}
            <div className="w-full lg:w-1/2 text-gray-800">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Sejarah <span className="text-sky-500">Bank Sumsel Babel</span>
              </h1>
              <div className="space-y-4 text-base text-justify leading-relaxed">
                <p>
                  Bank Sumsel Babel berdiri pada tanggal 6 November 1957 atas
                  Keputusan Panglima Ketua Penguasa Perang Daerah Sriwijaya
                  Tingkat I Sumatera Selatan, Akta Notaris Tan Thong Ke, dan
                  izin dari usaha dari Menteri Keuangan saat itu.
                </p>
                <p>
                  Pada tahun 1962, sejak diberlakukannya Undang-Undang Nomor 13
                  tahun 1962 tentang Bank Pembangunan Daerah, Bank Sumsel Babel
                  resmi menjadi milik Pemerintah Daerah Provinsi Sumatera
                  Selatan dengan status perusahaan daerah.
                </p>
                <p>
                  Setelah mengalami beberapa kali perubahan, terakhir sejak
                  diberlakukannya Undang-Undang Nomor 7 Tahun 1992 tentang
                  perbankan dan sesuai dengan Perda No. 6 tahun 2000 tanggal 19
                  Mei 2000, Bank Sumsel mengubah bentuk badan hukum dari
                  Perusahaan Daerah menjadi Perusahaan Persero Terbatas dengan
                  Akta Pendirian No. 20 tanggal 25 November 2000 dan persetujuan
                  Deputi Gubernur Bank Indonesia No. 3/2/KEP.DpG/2001 tanggal 24
                  September 2001.
                </p>
                <p>
                  Perubahan badan hukum tersebut terhitung tanggal 1 Oktober
                  2001, dengan berbagai perubahan yang mendasar dan menyeluruh
                  tersebut menjadikan Bank Sumsel lebih profesional dan mampu
                  bersaing pada era otonomi daerah.
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

        {/* Section : Latar Belakang & Tujuan SIFina */}
        <section ref={backgroundRef} className="bg-white py-16">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* LATAR BELAKANG */}
              <div className="bg-sky-100 p-6 px-10 py-15 gap-10 rounded-xl shadow-sm w-full lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Sekilas Perubahan Nama <br />
                  <span className="text-sky-500">Bank Sumsel Babel</span>
                </h2>
                <div className="text-base leading-relaxed text-justify space-y-4">
                  <p>
                    Sebelumnya Pemerintahan Provinsi Sumatera Selatan meliputi
                    wilayah Sumatera Selatan dan Wilayah Kepulauan Bangka
                    Belitung, dan hasil dari pemekaran wilayah juga telah
                    disahkannya Provinsi Kepulauan Bangka Belitung pada 22
                    November 2000, maka dengan resmi Kepulauan Bangka Belitung
                    merupakan Provinsi Pemekaran dari Wilayah Sumatera Selatan
                    dan menjadi Pemerintah Provinsi Kepulauan Bangka Belitung.
                  </p>
                  <p>
                    Karena Bank Sumsel dimiliki oleh dua Pemerintahan Provinsi,
                    maka digagaslah perubahan nama dari <b>Bank Sumsel </b>
                    menjadi <b>Bank SUMSEL BABEL.</b>
                  </p>
                  <p>
                    Berdasarkan Pernyataan Keputusan Pemegang Saham di Luar
                    Rapat PT. Bank Pembangunan Daerah Sumatera Selatan Nomor 02
                    tanggal 03 November 2009 dan Pengesahan Menteri Hukum dan
                    Hak Azazi Manusia Republik Indonesia
                    Nomor:AHU-56914.AH.01.02. Tahun 2009 tanggal 20 November
                    2009, maka: Bank Sumsel berubah nama menjadi{" "}
                    <b>Bank Sumsel Babel.</b>
                  </p>
                </div>
              </div>

              {/* VISI MISI */}
              <div ref={visimisiRef} className="bg-sky-100 p-6 px-10 py-15 gap-10 rounded-xl shadow-sm w-full lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Visi & Misi <br />
                  <span className="text-sky-500">Bank Sumsel Babel</span>
                </h2>
                <div className="text-base leading-relaxed text-justify space-y-4 mb-6">
                  <p>
                    Menjadi Bank terkemuka dan terpercaya dengan kinerja unggul
                    berbasis layanan digital
                  </p>
                </div>
                <ul className="space-y-4 text-left text-gray-800 font-medium">
                  {visiMisi.map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-sky-500 rounded-md flex items-center justify-center mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-15" />
        {/* SVG Transition */}
        <svg
          className="w-full"
          viewBox="0 0 1440 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <rect x="0" y="0" width="1440" height="30" fill="#E3F7FF" />
          <g fill="white">
            {Array.from({ length: 60 }).map((_, i) => (
              <rect key={i} x={i * 50} y="0" width="20" height="30" />
            ))}
          </g>
        </svg>

        <ManajemenSection />

        {/* SVG Transition */}
        <svg
          className="w-full"
          viewBox="0 0 1440 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <rect x="0" y="0" width="1440" height="30" fill="#E3F7FF" />
          <g fill="white">
            {Array.from({ length: 60 }).map((_, i) => (
              <rect key={i} x={i * 60} y="0" width="30" height="30" />
            ))}
          </g>
        </svg>

        {/* SECTION STRUKTUR ORGANISASI */}
        <section ref={strukturRef} className="bg-white relative z-10 px-4 sm:px-12 md:px-45 pt-10 mt-10 text-gray-800">
          {/* Background Bubble */}
          <img
            src={BubbleBg}
            alt="Bubble background"
            className="w-full absolute left-1/2 -translate-x-1/2 opacity-40 z-20 pointer-events-none"
          />
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Struktur Organisasi <br />
              <span className="text-sky-500">Bank Sumsel Babel</span>
            </h2>
            <img
              src={struktur}
              alt="SiFina Dashboard"
              className="w-full object-contain mt-6"
            />
            <p className="text-gray-700 text-md  text-justify">
              Struktur organisasi Bank Sumsel Babel dirancang untuk memastikan
              pelaksanaan fungsi bisnis dan pengawasan berjalan secara efektif,
              seimbang, dan profesional. Struktur ini terdiri dari tiga lapisan
              utama : <b>pengawasan, manajemen eksekutif, </b>dan{" "}
              <b>unit operasional serta pendukung. </b>
              Pada puncaknya, terdapat <b>Rapat Umum Pemegang Saham (RUPS) </b>
              sebagai otoritas tertinggi yang menentukan arah strategis bank. Di
              bawahnya terdapat Dewan Komisaris yang menjalankan fungsi
              pengawasan, serta Dewan Pengawas Syariah untuk memastikan
              kepatuhan pada prinsip-prinsip syariah.
            </p>
          </div>
        </section>

        {/* Section Penutup */}
        <section className="bg-white relative z-10 px-4 sm:px-12 md:px-45 pt-10 mt-30 text-gray-800">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-20">
              Platform Layanan Digital
              <span className="text-sky-500"> SIFina</span>
            </h2>
            <div className="flex justify-center items-center gap-30 flex-wrap mb-26 z-30 relative">
              {icons.map((icon, index) => (
                <img
                  key={index}
                  ref={(el) => (iconsRef.current[index] = el)}
                  src={icon.src}
                  alt={`icon-${index}`}
                  className={`${icon.size} object-contain`}
                />
              ))}
            </div>
            {/* Background Bubble */}
            <div className="mb-60">
              <img
                src={bgFooter}
                alt="Background End"
                className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-full opacity-100 z-10 pointer-events-none"
              />
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default TentangBSB;