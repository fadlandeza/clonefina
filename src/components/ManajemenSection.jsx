import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Assets Direksi
import direksi1 from "../assets/img/direksi-1.jpeg";
import direksi2 from "../assets/img/direksi-2.jpeg";
import direksi3 from "../assets/img/direksi-3.png";

// Assets Komisaris
import komisaris1 from "../assets/img/komisaris-1.jpeg";
import komisaris2 from "../assets/img/komisaris-2.jpeg";
import komisaris3 from "../assets/img/komisaris-3.png";

// Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

const ManajemenSection = () => {
  const manajemenRef = useRef(null);
  const [activeTab, setActiveTab] = useState("direksi");
  const tabClass = (tab) =>
    `px-4 pb-1 font-semibold border-b-2 transition-colors duration-300 ${
      activeTab === tab
        ? "border-sky-500 text-sky-500"
        : "border-transparent text-gray-500 hover:text-sky-500"
    }`;

  const direksiData = [
    {
      name: "Riera Ecorhynalda",
      title: "Direktur Kepatuhan dan Manajemen Risiko",
      image: direksi1,
      desc: `Lahir di Palembang pada 12 Juli 1965, beliau merupakan alumnus Universitas Sriwijaya yang memiliki rekam jejak 
        profesional yang panjang dan solid di lingkungan Bank Sumsel Babel. Sebelum diangkat sebagai Direktur Kepatuhan dan Manajemen 
        Risiko, beliau telah menduduki berbagai posisi strategis yang menunjukkan konsistensi dalam kepemimpinan, pemahaman mendalam 
        terhadap dinamika industri perbankan, serta komitmen terhadap tata kelola yang baik. Jabatan terakhir yang diemban adalah 
        sebagai Anggota Komite Pemantau Risiko Bank Sumsel Babel, di mana beliau secara aktif memberikan pandangan dan rekomendasi
        terkait pengelolaan risiko strategis. Pada tahun 2021, beliau juga dipercaya sebagai Tim Leader Ad-hoc Implementasi 
        Struktur Re-organisasi, berperan penting dalam proses transformasi organisasi yang berdampak pada peningkatan efektivitas 
        dan efisiensi operasional bank. Sebelumnya, beliau menjabat sebagai Pemimpin Divisi Kepatuhan (2019–2021), Pemimpin Divisi
        Tresuri & Internasional (2016–2019), dan Pemimpin Divisi Teknologi Informasi (2014–2016), serta pernah memimpin operasional 
        di daerah sebagai Pemimpin Cabang Indralaya (2013–2014). Ragam pengalaman lintas fungsi ini mencerminkan kapabilitas dan 
        ketangguhan beliau dalam memimpin unit-unit kritikal yang berkontribusi terhadap pencapaian visi dan misi Bank Sumsel Babel 
        dalam mendorong pertumbuhan ekonomi daerah secara berkelanjutan.`,
    },
    {
      name: "Suroso Djailani",
      title: "Direktur Bisnis",
      image: direksi2,
      desc: `Lahir di Metro, Lampung pada 2 September 1968, Beliau merupakan lulusan Sarjana dari Universitas Tulang Bawang, Bandar 
        Lampung, dengan pengalaman panjang dan mendalam di industri perbankan nasional, khususnya dalam pengelolaan bisnis dan layanan 
        mikro. Sebelum menjabat sebagai Direktur Bisnis Bank Sumsel Babel, beliau telah mengemban berbagai posisi strategis di PT Bank 
        Mandiri (Persero) Tbk, yang menjadi fondasi kepemimpinannya serta memperkuat keahliannya dalam pengembangan jaringan dan 
        transformasi model operasional perbankan. Beberapa posisi penting yang pernah diemban antara lain sebagai Area Head Bank Mandiri
        – Area Palembang (2021–2024), Area Head Bank Mandiri – Area Jambi (2019–2021), Microbanking Head Region II (2016–2019), 
        Business Support Head Region VIII (2015–2016), dan Microbanking Head Region VIII (2013–2015). Seluruh penugasan tersebut 
        mencerminkan konsistensi beliau dalam memimpin unit-unit bisnis strategis dan keberhasilannya dalam mendorong pertumbuhan 
        portofolio pembiayaan serta efektivitas operasional di berbagai wilayah. Dengan latar belakang yang kuat dan komitmen terhadap 
        penguatan kinerja bisnis berbasis kebutuhan pasar, beliau kini berperan penting dalam mengakselerasi kontribusi Bank Sumsel 
        Babel sebagai mitra keuangan utama di wilayah Sumatera Selatan dan Bangka Belitung.`,
    },
    {
      name: "Festero Mohamad Papeko",
      title: "Direktur Operasional",
      image: direksi3,
      desc: `Festero Mohamad Papeko menjabat sebagai Direktur Operasional Bank Sumsel Babel sejak tahun 2025. Lahir di Jakarta pada 
        22 Juli 1980, beliau menyelesaikan pendidikan Sarjana Ekonomi Akuntansi di Universitas Sriwijaya Palembang dan memulai karier 
        di dunia perbankan sebagai Officer Development Program (ODP) Angkatan Pertama Bank Sumsel Babel. Selama meniti karier di Bank 
        Sumsel Babel, Festero Mohamad Papeko telah memegang sejumlah posisi strategis. Beliau menjabat sebagai Pemimpin Cabang Mentok 
        (2016–2018), kemudian dipercaya sebagai Pemimpin Bagian Akuntansi dan Pengembangan Unit Usaha Syariah (2018–2021), serta 
        Pemimpin Divisi Usaha Syariah (2021–2025). Dalam setiap penugasannya, beliau menunjukkan dedikasi terhadap penguatan sistem 
        operasional dan pengembangan layanan yang responsif terhadap kebutuhan nasabah. Sebagai Direktur Operasional, beliau 
        bertanggung jawab atas pengelolaan dan pengawasan seluruh fungsi operasional bank, termasuk optimalisasi proses bisnis, 
        efisiensi layanan, serta peningkatan kualitas pelayanan. Dengan rekam jejak yang kuat di bidang operasional, akuntansi, 
        dan perbankan syariah, Festero Mohamad Papeko membawa kontribusi nyata dalam mendorong kinerja operasional yang unggul dan 
        mendukung pertumbuhan bisnis Bank Sumsel Babel secara berkelanjutan berdasarkan prinsip tata kelola perusahaan yang baik (GCG).`,
    },
  ];

  const komisarisData = [
    {
      name: "Drs. H. Edward Candra, M.H.",
      title: "Komisaris Utama",
      image: komisaris1,
      desc: `Drs. H. Edward Chandra, M.H. lahir di Talang Balai Baru pada 6 September 1972. Beliau meraih gelar Sarjana Hukum Tata 
        Negara dari Universitas Sriwijaya dan melanjutkan pendidikan Magister Administrasi Publik di universitas yang sama. Dengan 
        latar belakang akademik di bidang hukum dan administrasi publik, beliau memiliki rekam jejak panjang di pemerintahan Provinsi 
        Sumatera Selatan dengan berbagai posisi strategis yang menunjukkan kapasitas kepemimpinan dan pemahamannya terhadap tata 
        kelola pemerintahan yang baik. Karier beliau antara lain mencakup jabatan sebagai Kepala Biro Pemerintahan Setda Provinsi 
        Sumsel (2016), Asisten I Bidang Pemerintahan dan Kesejahteraan Rakyat Setda Provinsi Sumsel, serta pernah mengemban amanah 
        sebagai Pelaksana Harian (Plh.) Bupati Ogan Komering Ulu (OKU) pada periode 2021–2022. Selain itu, beliau juga dipercaya 
        sebagai Pelaksana Tugas Kepala Dinas Lingkungan Hidup dan Pertanahan Provinsi Sumsel sebelum akhirnya diangkat sebagai 
        Sekretaris Daerah Provinsi Sumatera Selatan. Dengan pengalaman yang luas di birokrasi pemerintahan dan kepemimpinan lintas 
        sektor, beliau kini menjalankan peran penting sebagai Komisaris Utama di Bank Sumsel Babel, berkontribusi dalam memperkuat 
        sinergi antara pemerintah daerah dan entitas perbankan untuk mendukung pembangunan yang inklusif dan berkelanjutan.`,
    },
    {
      name: "Zakaria Wahab",
      title: "Komisaris Independen",
      image: komisaris2,
      desc: `Zakaria Wahab lahir di Baturaja pada tanggal 14 Juli 1957. Beliau menempuh pendidikan Sarjana Ekonomi Perusahaan di 
        Universitas Sriwijaya (Unsri), kemudian melanjutkan program Magister Administrasi Bisnis di Wright State University, Amerika 
        Serikat. Pendidikan doktoralnya diselesaikan di Universitas Padjadjaran dengan konsentrasi Ilmu Ekonomi. Dalam bidang akademik, 
        Zakaria Wahab memiliki pengalaman yang luas. Ia dikenal sebagai Dosen Program Pascasarjana (S2 dan S3) di Universitas Sriwijaya, 
        serta pernah menjabat sebagai Ketua Jurusan Manajemen Fakultas Ekonomi Universitas Sriwijaya dan Anggota Senat Universitas 
        Sriwijaya. Selain itu, beliau juga pernah mengemban amanah sebagai Dekan Fakultas Ekonomi Universitas IBA Palembang, Pembantu 
        Rektor di Universitas IBA, serta Rektor Universitas Prabumulih. Terakhir, beliau juga tercatat sebagai Direktur Program 
        Pascasarjana di Universitas Lembah Dempo. Dengan latar belakang akademik yang kuat dan pengalaman kepemimpinan yang luas di 
        dunia pendidikan tinggi, Zakaria Wahab diharapkan dapat memberikan kontribusi strategis dalam pengawasan dan pengembangan 
        Bank Sumsel Babel, khususnya dalam aspek tata kelola dan kebijakan ekonomi yang berkelanjutan.`,
    },
    {
      name: "Noversa",
      title: "Komisaris Independen",
      image: komisaris3,
      desc: `Lahir di Belitung pada 8 November 1971, beliau menyelesaikan pendidikan Sarjana (S1) di Universitas Sriwijaya dan telah 
        meniti karier profesional di berbagai sektor industri, khususnya pada bidang manajerial dan pengelolaan hubungan strategis 
        dengan pemangku kepentingan. Sebelum menjabat sebagai Komisaris Independen Bank Sumsel Babel, beliau memiliki pengalaman luas 
        di sektor swasta dengan rekam jejak yang mencerminkan kapabilitas dalam pengelolaan operasional, pengembangan bisnis, serta 
        manajemen hubungan klien utama. Karier beliau dimulai sebagai Operasional Manager di PT Glady Palmando Mandiri, Jakarta pada 
        tahun 1995, kemudian menjabat sebagai Sub Unit Manager di PT Asuransi Staco Raharja, Cabang Cikini Jakarta pada tahun 1997, 
        dan selanjutnya menempati posisi strategis sebagai Manager/Key Account Manager di PT Sanofi Aventis pada tahun 2013. Berbagai 
        posisi tersebut menunjukkan komitmen dan konsistensi beliau dalam mengelola tanggung jawab di berbagai sektor industri, yang 
        kini menjadi bekal penting dalam menjalankan peran pengawasan dan pemberian nasihat strategis sebagai Komisaris Independen di 
        Bank Sumsel Babel, khususnya dalam menjaga integritas tata kelola perusahaan dan memastikan keberlanjutan kinerja yang sehat 
        dan profesional.`,
    },
  ];

  const currentData = activeTab === "direksi" ? direksiData : komisarisData;

  const quoteText =
    activeTab === "direksi"
      ? `\"Kami berkomitmen untuk selalu memberikan yang terbaik guna mencapai kinerja secara berkelanjutan. Kami berharap kontribusi Bank Sumsel Babel terhadap perekonomian Indonesia akan semakin meningkat dari tahun ke tahun dan akan selalu menjadi bagian penting dalam pembangunan Indonesia.\"`
      : `\"Kami percaya bahwa pengawasan yang kuat dan independen dari Komisaris menjadi fondasi penting bagi keberlanjutan dan pertumbuhan Bank Sumsel Babel.\"`;

  useEffect(() => {
    const sections = [{ ref: manajemenRef, y: 50 }];

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
    <section
      ref={manajemenRef}
      className="bg-sky-100 relative z-10 px-4 sm:px-12 md:px-45 pt-10 pb-20 text-gray-800"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">
          Manajemen <br />
          <span className="text-sky-500">Bank Sumsel Babel</span>
        </h2>
        <p className="mt-4 text-gray-700 text-lg  text-justify">
          Kami berkomitmen untuk selalu memberikan yang terbaik guna mencapai
          kinerja secara berkelanjutan. Kami berharap kontribusi Bank Sumsel
          Babel terhadap perekonomian Indonesia akan semakin meningkat dari
          tahun ke tahun dan akan selalu menjadi bagian penting dalam
          pembangunan Indonesia.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveTab("direksi")}
          className={tabClass("direksi")}
        >
          Direksi
        </button>
        <button
          onClick={() => setActiveTab("komisaris")}
          className={tabClass("komisaris")}
        >
          Komisaris
        </button>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-md italic font-semibold text-gray-500 px-4">
          {quoteText}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10">
        {currentData.map((person, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-15"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-52 h-60 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-bold">{person.name}</h3>
              <p className="font-medium text-sm text-gray-600 mb-2">
                {person.title}
              </p>
              <p className="text-sm text-justify">{person.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManajemenSection;
