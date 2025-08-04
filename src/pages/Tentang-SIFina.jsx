import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Icon React
import {
  FiCreditCard,
  FiRepeat,
  FiTrendingUp,
  FiDollarSign,
  FiSearch,
  FiBookOpen,
} from "react-icons/fi";

// Assets
import cardSifina from "../assets/img/card-sifina.png";
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

// Tujuan SIFina
const tujuanSifina = [
  {
    title: "Meningkatkan Aksesibilitas dan Efisiensi",
    desc: "Mempermudah akses pengguna ke layanan atau sistem, sekaligus mempercepat proses dengan meminimalkan hambatan.",
  },
  {
    title: "Adaptabilitas Terhadap Perubahan",
    desc: "Beradaptasi dengan cepat terhadap perkembangan teknologi dan dinamika bisnis yang mencakup fleksibilitas dalam mengadopsi inovasi baru, penyesuaian terhadap tren pasar, serta respons terhadap kebutuhan pengguna dan model bisnis.",
  },
  {
    title: "Segmentasi Segmen Pasar",
    desc: "Menghasilkan layanan yang fokus pada segmen pasar tertentu dengan lebih mendalam dan relevan antara lain Pemerintah Daerah, Dinas, BUMN/BUMD, Lembaga Pendidikan Universitas/Sekolah, Perusahaan, UMKM, mitra lainnya.",
  },
];

const icons = [
  { src: FiturIcon1, size: "w-20 sm:w-20" },
  { src: FiturIcon2, size: "w-25 sm:w-25" },
  { src: FiturIcon3, size: "w-18 sm:w-18" },
  { src: FiturIcon4, size: "w-20 sm:w-20" },
  { src: FiturIcon5, size: "w-16 sm:w-16" },
];

// Fitur SiFina
const fiturList = [
  {
    icon: <FiCreditCard className="text-3xl text-sky-500" />,
    title: "Informasi Saldo Rekening",
    desc: "Informasi saldo rekening yang ditampilkan dapat multi rekening sesuai dengan wewenang akses rekening terdaftar pada akun.",
    badge: "SIFina Dashboard",
  },
  {
    icon: <FiRepeat className="text-3xl text-sky-500" />,
    title: "Mutasi Rekening",
    desc: "Riwayat transaksi rekening dapat diakses dan dilakukan cetak dengan format PDF dan Excel.",
    badge: "SIFina Dashboard",
  },
  {
    icon: <FiTrendingUp className="text-3xl text-sky-500" />,
    title: "Informasi Transaksi",
    desc: "SIFina dapat menampilkan semua data transaksi yang dilakukan melalui QRIS dan Virtual Account berdasarkan kode merchant dan Provider terdaftar.",
    badge: "SIFina Dashboard",
  },
  {
    icon: <FiDollarSign className="text-3xl text-sky-500" />,
    title: "Proses Pembayaran",
    desc: "SIFina menyediakan fitur buat Nomor Virtual Account atau Kode QRIS agar memudahkan Anda dalam bertransaksi.",
    badge: "SIFina Portal",
  },
  {
    icon: <FiSearch className="text-3xl text-sky-500" />,
    title: "Periksa Status Pembayaran",
    desc: "Pantau status pembayaran yang dilakukan melalui Virtual Account ataupun QRIS.",
    badge: "SIFina Portal",
  },
  {
    icon: <FiBookOpen className="text-3xl text-sky-500" />,
    title: "Laporan Transaksi",
    desc: "Fitur akses dan cetak daftar transaksi yang dibayar menggunakan QRIS dan Virtual Account yang dibuat pada Aplikasi SIFina.",
    badge: "SIFina Portal",
  },
];

const TentangSIFina = () => {
  const iconsRef = useRef([]);

  // Definisikan section yang ingin di animasikan
  const definisiRef = useRef(null);
  const backgroundRef = useRef(null);
  const tujuanRef = useRef(null);
  const fiturRef = useRef(null);

  useEffect(() => {
    iconsRef.current.forEach((el, i) => {
      gsap.to(el, {
        y: -15,
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
      { ref: definisiRef, y: 50 },
      { ref: backgroundRef, y: 50 },
      { ref: tujuanRef, y: 50 },
      { ref: fiturRef, y: 50 },
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
            toggleActions: "play none none reset",
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-white">
        <Navbar />

        {/* Section : Definisi */}
        <section ref={definisiRef} className="bg-white py-17 relative overflow-hidden">
          <div className="relative z-10 bg-sky-100 flex flex-col lg:flex-row items-center px-0 py-0 max-w-screen-xl mx-auto rounded-xl shadow-sm">
            {/* Ornamen background kiri atas */}
            <img
              src={bgCard}
              alt="Ornamen"
              className="absolute top-0 right-0 w-48 opacity-70 pointer-events-none z-0"
            />
            {/* Gambar */}
            <div className="w-full lg:w-1/2 flex self-end">
              <img
                src={cardSifina}
                alt="Card SIFina"
                className="w-[450px] h-auto object-contain"
              />
            </div>

            {/* Teks Definisi */}
            <div className="w-full lg:w-1/2 text-gray-800">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 lg:px-15">
                Apa itu SIFina <br />
                Bank Sumsel Babel ?
              </h1>
              <div className="space-y-4 text-base text-justify leading-relaxed lg:px-15">
                <p>
                  Sistem Informasi Finansial atau disingkat SIFina merupakan
                  sebuah platform digital berbasis website yang menyediakan
                  informasi mengenai data keuangan nasabah Bank Sumsel Babel,
                  berupa data rekening dan aktivitas perbankan serta menyediakan
                  layanan transaksi yang dikemas dalam satu ekosistem dengan
                  dilengkapi metode keamanan authentikasi dua faktor/ Two Factor
                  Authentication (2FA) melalui penerapan kode OTP (One-Time
                  Password).
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
                  Latar Belakang <span className="text-sky-500">SIFina</span>
                </h2>
                <div className="text-base leading-relaxed text-justify space-y-4">
                  <p>
                    SIFina lahir dari gagasan dan komitmen Bank Sumsel Babel
                    untuk terus meningkatkan layanan terbaik kepada mitra-mitra
                    daerah secara luas (Pemerintah Daerah, Dinas, BUMN/BUMD,
                    Lembaga Pendidikan Universitas/Sekolah, Perusahaan, UMKM,
                    mitra lainnya) guna mendukung kemajuan dan memenuhi
                    kebutuhan Sumatera Selatan dan Bangka Belitung. Kami melihat
                    kebutuhan akan akses informasi data perbankan yang dimiliki
                    nasabah agar dapat di akses lebih fleksibel di mana saja dan
                    kapan saja.
                  </p>
                  <p>
                    Platform digital SIFina merupakan inovasi yang dikembangkan
                    untuk menjawab tantangan digitalisasi untuk menghadirkan
                    suatu layanan yang cepat, personal dan efisien sesuai dengan
                    kebutuhan mitra Bank.
                  </p>
                </div>
              </div>

              {/* TUJUAN */}
              <div ref={tujuanRef} className="bg-sky-100 p-6 px-10 py-15 gap-10 rounded-xl shadow-sm w-full lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Tujuan <span className="text-sky-500">SIFina</span>
                </h2>
                <ul className="space-y-4 text-left text-gray-800 font-medium">
                  {tujuanSifina.map((item, idx) => (
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
                      <div>
                        <p className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-md font-normal text-gray-700">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION FITUR SIFINA */}
        <section ref={fiturRef} className="py-16 px-4 bg-gray-80">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Fitur yang Kami Sediakan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fiturList.map((fitur, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-left hover:shadow-md transition duration-300"
                >
                  <div className="mb-4">{fitur.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {fitur.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">{fitur.desc}</p>
                  <p className="text-sm text-gray-500">
                    Fitur tersedia di :{" "}
                    <span className="inline-block bg-sky-200 text-sky-600 font-semibold px-2 py-0.5 rounded-full text-xs">
                      {fitur.badge}
                    </span>
                  </p>
                </div>
              ))}
            </div>
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

export default TentangSIFina;
