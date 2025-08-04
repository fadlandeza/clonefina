import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/button/Button2";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assets
import BubbleBg from "../assets/img/bubble-bg.svg";
import OrnamentLeft from "../assets/img/flower.png";
import OrnamentRight from "../assets/img/flower2.png";
import HeroMiddle from "../assets/img/hero1.png";
import IconLeft from "../assets/img/icon-kiri.png";
import IconRight from "../assets/img/icon-kanan.png";
import SifinaDashboard from "../assets/img/sifina-dashboard.png";
import SifinaPortal from "../assets/img/sifina-portal.png";
import FiturIcon1 from "../assets/img/fitur-1.svg";
import FiturIcon2 from "../assets/img/fitur-2.svg";
import FiturIcon3 from "../assets/img/fitur-3.svg";
import FiturIcon4 from "../assets/img/fitur-4.svg";
import FiturIcon5 from "../assets/img/fitur-5.svg";

// Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

const fiturData = [
  {
    icon: FiturIcon1,
    title: "Informasi Rekening",
    desc: "Pantau saldo multi rekening kelolaan Anda secara terpusat dalam satu akun.",
  },
  {
    icon: FiturIcon2,
    title: "Mutasi Rekening",
    desc: "Akses dan Cetak laporan riwayat transaksi dari berbagai rekening terdaftar",
  },
  {
    icon: FiturIcon3,
    title: "QRIS Dinamis",
    desc: "Terima pembayaran lebih praktis dengan QRIS, tinggal scan dan langsung bayar.",
  },
  {
    icon: FiturIcon4,
    title: "Virtual Account",
    desc: "Transaksi lebih aman dan mudah dengan pembayaran Virtual Account",
  },
  {
    icon: FiturIcon5,
    title: "Laporan",
    desc: "Akses dan kelola laporan transaksi pembayaran QRIS ataupun Virtual Account.",
  },
];

// Section Profile
const profilKeunggulan = [
  "Mendorong pertumbuhan ekonomi daerah melalui layanan keuangan digital",
  "Menyediakan layanan untuk pemerintah daerah dan masyarakat umum",
  "Mengedepankan keamanan, kenyamanan, dan kemudahan transaksi",
];

// Section SiFina Dashboard
const fiturSifinaDashboard = [
  "Informasi Saldo multi rekening secara Real-Time",
  "Laporan Mutasi Rekening Terperinci",
  "Laporan Transaksi QRIS dan Virtual Account",
];

// Section SiFina Portal
const fiturSifinaPortal = [
  "Pembuatan QRIS dan Nomor Virtual Account (VA) Instan",
  "Cek Status Pembayaran Real-Time",
  "Laporan Transaksi Terperinci",
];

// Section FAQ
const faqData = [
  {
    question: "Apa itu SIFina?",
    answer:
      "Sistem Informasi Finansial atau disingkat SIFina merupakan sebuah platform digital berbasis website yang menyediakan informasi mengenai data keuangan nasabah Bank Sumsel Babel, berupa data rekening dan aktivitas perbankan serta menyediakan layanan transaksi yang dikemas dalam satu ekosistem.",
  },
  {
    question: "Siapa saja yang bisa menggunakan layanan SIFina?",
    answer:
      "Seluruh mitra Bank Sumsel Babel secara luas baik Pemerintah Daerah, Dinas, BUMN/BUMD, Lembaga Pendidikan Universitas/Sekolah, Perusahaan, UMKM dan mitra lainnya.",
  },
  {
    question: "Bagaimana cara menggunakan layanan SIFina?",
    answer:
      "Dapat menghubungi kantor cabang Bank Sumsel Babel terdekat untuk mendaftarkan layanan SIFina.",
  },
  {
    question: "Apa itu Dashboard Informasi SIFina (SIFina Dashboard)?",
    answer:
      "Dashboard Informasi SIFina merupakan suatu aplikasi berbasis website yang fungsi utamanya menyediakan informasi data rekening dan aktivitas perbankan.",
  },
  {
    question: "Apa itu Portal Transaksi SIFina (SIFina Portal)?",
    answer:
      "Portal Transaksi SIFina merupakan suatu aplikasi berbasis website yang fungsi utamanya menyediakan layanan transaksional terhadap aktivitas perbankan.",
  },
  {
    question: "Adakah biaya yang dikenakan untuk pendaftaran layanan?",
    answer: "Untuk saat ini, belum dikenakan biaya pendaftaran layanan.",
  },
];

const MainLayout = () => {
  // Definisikan section yang ingin di animasikan
  const fiturRef = useRef(null);
  const dashboardRef = useRef(null);
  const portalRef = useRef(null);
  const faqRef = useRef(null);
  const profilRef = useRef(null);

  // Agar menuju Section Profile
  const scrollToProfil = () => {
    if (profilRef.current) {
      profilRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Section Fitur Unggulan
  useEffect(() => {
    gsap.from(".icon-left", { x: -100, opacity: 0, duration: 1.5, delay: 0.5 ,ease:"power2.out"});
    gsap.from(".icon-right", { x: 100, opacity: 0, duration: 1.5, delay: 0.5 ,ease:"power2.out"});
    gsap.from(".hero-image", { y: 250, opacity: 0, duration: 1, delay: 0.5 ,ease: "power2.out"});
    gsap.from(".feature-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 1.2,
    });
  }, []);

  // Section FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  // Animasi Answer FAQ
  const answerRefs = useRef([]);
  answerRefs.current = []; // Reset saat setiap render
  const setAnswerRef = (el, idx) => {
    if (el) answerRefs.current[idx] = el;
  };

  // Hook untuk GSAP Answer FAQ
    useEffect(() => {
      if (activeIndex !== null && answerRefs.current[activeIndex]) {
        gsap.fromTo(
          answerRefs.current[activeIndex],
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }
    }, [activeIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = [
      { ref: fiturRef, y: 50 },
      { ref: profilRef, y: 50 },
      { ref: dashboardRef, y: 50 },
      { ref: portalRef, y: 50 },
      { ref: faqRef, y: 30 },
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
            end: "30%",
            toggleActions: "play none none reset",
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
      <Navbar />

      <main className="relative bg-white w-full min-h-screen overflow-hidden">
        {/* Ornamen */}
        <img
          src={OrnamentLeft}
          alt="Ornamen Kiri"
          className="absolute top-20 left-0 w-40 opacity-100 z-10"
        />
        <img
          src={OrnamentRight}
          alt="Ornamen Kanan"
          className="absolute top-20 right-0 w-60 opacity-100 z-10"
        />

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Platform <span className="text-sky-500">SiFina</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl">
            Sesuaikan kebutuhan Anda dan temukan kemudahan dalam mengelola
            keuangan dalam satu platform{" "}
            <strong>Sistem Informasi Finansial Bank Sumsel Babel</strong> yang
            terintegrasi dan mudah diakses kapan saja dan di mana saja.
          </p>
          <Button
            onClick={scrollToProfil}
            className="w-fit text-sm font-medium py-1.5 px-4 rounded-full shadow transition duration-300"
            color="bg-sky-500 hover:bg-sky-600 text-white mt-6"
            text="Jelajah →"
          />

        </section>
        {/* Hero Image + Icon */}
        <div className="relative w-full z-0">
          <img
            src={IconLeft}
            alt="Icon Kiri"
            className="absolute left-14 top-0 w-24 md:w-36 lg:w-80 z-0 icon-left"
          />
          <img
            src={IconRight}
            alt="Icon Kanan"
            className="absolute right-14 top-0 w-24 md:w-36 lg:w-80 z-0 icon-right"
          />
          <img
            src={HeroMiddle}
            alt="Ilustrasi Hero Tengah"
            className="w-full h-auto object-cover relative z-10 hero-image"
          />
        </div>

        {/* Fitur Unggulan */}
        <section className="bg-[#e0f5fe] py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Fitur <span className="text-sky-500">Unggulan</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Temukan fitur unggulan kami yang akan mempermudah bisnis Anda.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {fiturData.map((fitur, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center feature-item"
              >
                <img
                  src={fitur.icon}
                  alt={fitur.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="font-semibold text-lg">{fitur.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{fitur.desc}</p>
              </div>
            ))}
          </div>
        </section>


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
              <rect key={i} x={i * 32} y="0" width="20" height="30" />
            ))}
          </g>
        </svg>

        {/* Profil Perusahaan */}
        <section
          ref={profilRef}
          className="bg-white py-20 px-6 flex flex-col lg:flex-row items-center justify-center gap-20 max-w-7xl mx-auto"
        >
          <div className="w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/zSDZ66KaqFw"
              title="Company Profile Bank Sumsel Babel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Profil Perusahaan <br />
              <span className="text-sky-500">Bank Sumsel Babel</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Bank Sumsel Babel adalah Bank Pembangunan Daerah yang hadir untuk
              mendukung pembangunan dan pertumbuhan ekonomi di Sumatera Selatan
              dan Bangka Belitung. Dengan semangat profesionalisme dan pelayanan
              prima, kami berkomitmen untuk memberikan solusi keuangan yang
              inovatif, aman, dan mudah diakses bagi masyarakat, pemerintah
              daerah, serta pelaku usaha.
            </p>
            <ul className="space-y-4 text-left text-gray-800 font-medium">
              {profilKeunggulan.map((text, idx) => (
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
            <Button
              href="https://www.banksumselbabel.com/id"
              target="_blank"
              rel="noopener noreferrer"
              color="mt-6 inline-block bg-sky-500 hover:bg-sky-600 text-white py-2 px-6 rounded-full transition"
              text="Kunjungi Website Kami →"
            />
          </div>
        </section>

        {/* Background Bubble */}
        <img
          src={BubbleBg}
          alt="Bubble background"
          className="w-full absolute left-1/2 -translate-x-1/2 opacity-40 z-20 pointer-events-none"
        />

        {/* SECTION SIFINA DASHBOARD */}
        <section
          ref={dashboardRef}
          className="bg-white py-20 px-6 flex flex-col lg:flex-row items-center justify-center gap-20 max-w-7xl mx-auto"
        >
          <div className="max-w-xl w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dashboard <br />
              Informasi <span className="text-sky-500">SiFina</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Mengelola keuangan kini lebih mudah dengan Dashboard Informasi
              SIFina. Kami memberikan akses real-time ke data keuangan Anda,
              memungkinkan Anda untuk mengetahui posisi saldo secara cepat serta
              melihat setiap transaksi yang terjadi dalam rekening Anda, kapan
              saja dan di mana saja.
            </p>
            <ul className="space-y-4 text-left text-gray-800 font-medium mb-6">
              {fiturSifinaDashboard.map((text, idx) => (
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

            <Button
              className="mt-8 w-fit"
              href="https://sifina.banksumselbabel.com"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-sky-500 hover:bg-sky-600 text-white py-2 px-6 rounded-full transition"
              text="Masuk Aplikasi →"
            />
          </div>

          <div className="flex justify-end w-full max-w-xl">
            <img
              src={SifinaDashboard}
              alt="SiFina Dashboard"
              className="w-full object-contain"
            />
          </div>
        </section>

        {/* Background Bubble */}
        <img
          src={BubbleBg}
          alt="Bubble background"
          className="w-full absolute left-1/2 -translate-x-1/2 opacity-40 z-20 pointer-events-none"
        />

        {/* SECTION SIFINA PORTAL */}
        <section
          ref={portalRef}
          className="bg-white py-20 px-6 flex flex-col lg:flex-row items-center justify-center gap-20 max-w-7xl mx-auto"
        >
          <div className="flex justify-start w-full max-w-xl">
            <img
              src={SifinaPortal}
              alt="SiFina Portal"
              className="w-full object-contain"
            />
          </div>

          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Portal <br />
              Transaksi <span className="text-sky-500">SiFina</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Kami menawarkan Solusi Pembayaran Modern: QRIS & Virtual Account
              dalam Satu Platform melalui Portal Transaksi SIFina. Dirancang
              untuk memberikan kenyamanan dan fleksibilitas, platform kami
              memastikan bahwa Anda dapat memproses setiap transaksi dengan
              lebih mudah dan aman.
            </p>
            <ul className="space-y-4 text-left text-gray-800 font-medium mb-6">
              {fiturSifinaPortal.map((text, idx) => (
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
            <Button
              className="mt-8 w-fit"
              href="https://sifina.banksumselbabel.com"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-sky-500 hover:bg-sky-600 text-white py-2 px-6 rounded-full transition"
              text="Masuk Aplikasi →"
            />
          </div>
        </section>

        {/* Background Bubble */}
        <img
          src={BubbleBg}
          alt="Bubble background"
          className="w-full absolute left-1/2 -translate-x-1/2 opacity-40 z-20 pointer-events-none"
        />

        {/* SECTION FAQ */}
        <section ref={faqRef} className="bg-white py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions{" "}
            <span className="text-sky-500">(FAQs)</span>
          </h2>
          <div className="space-y-6">
            {faqData.map((item, idx) => (
              <div key={idx} className="border-b pb-4">
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left flex justify-between items-center font-medium text-gray-800 py-3 focus:outline-none"
                >
                  {item.question}
                  <span className="text-sky-500 font-bold text-xl">
                    {activeIndex === idx ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === idx && (
                  <p
                    ref={(el) => setAnswerRef(el, idx)}
                    className="mt-2 p-4 rounded-md bg-sky-100 text-gray-800 overflow-hidden"
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default MainLayout;