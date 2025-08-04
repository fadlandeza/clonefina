import React, { useState } from "react";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const kantorData = {
  "Kantor Cabang": [
    {
      title: "CABANG KAPTEN A. RIVAI",
      location: "PALEMBANG",
      address:
        "JL. KAPTEN A. RIVAI NO. 21 PALEMBANG (30129) TELEPHONE 0711-350494 FAXSIMILE 0711-314154, 0711-378143 EMAIL kap@banksumselbabel.com",
    },
    {
      title: "CABANG BATURAJA",
      location: "BATURAJA",
      address:
        "JL. DR. SETIA BUDI PASAR BARU BATURAJA (32115) TELEPHONE 0735-320027, 0735-320466 FAXSIMILE 0735-324024 EMAIL baturaja@banksumselbabel.com",
    },
    {
      title: "CABANG LAHAT",
      location: "LAHAT",
      address:
        "JL. PROF EMIL SALIM NO. 22 KEL. PASAR BARU LAHAT TELEPHONE 0731-321632 FAXSIMILE 0731-325262 EMAIL lahat@banksumselbabel.com",
    },
    {
      title: "CABANG LUBUK LINGGAU",
      location: "LUBUK LINGGAU",
      address:
        "JL. GARUDA NO. 43 KEC LUBUK LINGGAU BARAT KEL. PASAR PERMIRI (31613) TELEPHONE 0733-323787, 0733-323786 FAXSIMILE 0733-323788 EMAIL lubuklinggau@banksumselbabel.com",
    },
    {
      title: "CABANG PANGKAL PINANG",
      location: "PANGKAL PINANG",
      address:
        "JL. JENDERAL SUDIRMAN No. 08 PANGKAL PINANG PROVINSI KEPULAUAN BANGKA BELITUNG TELEPHONE 0717-431945 - 421946 FAXSIMILE 0717-432850 EMAIL pangkalpinang@banksumselbabel.com",
    },
    {
      title: "CABANG SUNGAI LIAT",
      location: "SUNGAI LIAT",
      address:
        "JL. JEND SUDIRMAN NO. 32 SUNGAI LIAT BANGKA (33211) TELEPHONE 0717-92043 FAXSIMILE 0717-93451 EMAIL sungailiat@banksumselbabel.com",
    },
    {
      title: "CABANG TANJUNG PANDAN",
      location: "TANJUNG PANDAN",
      address:
        "JL. SEKOLAH NO. 02 KECAMATAN KOTA KELURAHAN KOTA TANJUNGPANDAN (33412) TELEPHONE 0719-21027, 0719-21180 FAXSIMILE 0719-21376 EMAIL tanjungpandan@banksumselbabel.com",
    },
    {
      title: "CABANG MUARA ENIM",
      location: "MUARA ENIM",
      address:
        "JL. JENDERAL SUDIRMAN NO. 160 MUARA ENIM TELEPHONE 0734-421264, 0733-323786 FAXSIMILE 0734-422680 EMAIL muaraenim@banksumselbabel.com",
    },
    {
      title: "CABANG KAYU AGUNG",
      location: "KAYU AGUNG",
      address:
        "JL. MUCTAR HASYIM KEL. CINTA RAJA KEC. KAYU AGUNG KAB. OKI (306114) TELEPHONE 0712-321400, 0712-323100 FAXSIMILE 0712-321835 EMAIL kayuagung@banksumselbabel.com",
    },
    // Page 2
    {
      title: "CABANG SEKAYU",
      location: "SEKAYU",
      address:
        "JL.MERDEKA LK.VII KEL. SERASAN JAYA KEC. SEKAYU (30711) TELEPHONE 0714-321213, 0714-321214 FAXSIMILE 0714-321873 EMAIL sekayu@banksumselbabel.com",
    },
    {
      title: "CABANG PALEMBANG",
      location: "PALEMBANG",
      address:
        "JL. KOLONEL ATMO NO. 40 TELEPHONE 0711-311922, 0711-311923 FAXSIMILE 0711-367507, 0711-372248 EMAIL palembang@banksumselbabel.com",
    },
    {
      title: "CABANG PRABUMULIH",
      location: "PRABUMULIH",
      address:
        "JL. JENDRAL SUDIRMAN NO. 19 KELURAHAN MUARA DUA KEC. PBM TIMUR (30111) TELEPHONE 0713-323006 FAXSIMILE 0713-325049 EMAIL prabumulih@banksumselbabel.com",
    },
    {
      title: "CABANG PAGAR ALAM",
      location: "PAGAR ALAM",
      address:
        "JL. KAPTEN SANAF NO. 41 PAGAR ALAM TELEPHONE 0730-621621, 0730-623101, 0730-621052 FAXSIMILE 0730-621152 EMAIL pagaralam@banksumselbabel.com",
    },
    {
      title: "CABANG TOBOALI",
      location: "TOBOALI",
      address:
        "JL. JENDERAL SUDIRMAN NO.17 TOBOALI KABUPATEN BANGKA SELATAN PROVINSI KEPULAUAN BANGKA BELITUNG TELP 0718-41112 FAXIMILE 0718-41379 EMAIL toboali@banksumselbabel.com",
    },
    {
      title: "CABANG MENTOK",
      location: "MENTOK",
      address:
        "JL. JEND SUDIRMAN NO. 162 KELURAHAN TANJUNG KEC. MUNTOK (33311) TELEPHONE 0716-22299, 0716-21295 FAXSIMILE 0716-22298 EMAIL muntok@banksumselbabel.com",
    },
    {
      title: "CABANG MANGGAR",
      location: "BELITUNG TIMUR",
      address:
        "JL. JEND. SUDIRMAN NO. 058 DESA KURNIA JAYA MANGGAR (33512) TELEPHONE 0719-91199 FAXSIMILE 0719-91763",
    },
    {
      title: "CABANG MARTAPURA",
      location: "MARTAPURA",
      address:
        "JL. MERDEKA NO. 654 TERUKIS RAHAYU MARTAPURA OKU TIMUR TELEPHONE 0735-482667 FAXSIMILE 0735-482668",
    },
    {
      title: "CABANG PANGKALAN BALAI",
      location: "PANGKALAN BALAI",
      address:
        "JL. MERDEKA NO. 03 KEL. KEDONDONG RAYE KEC. BANYUASIN III PANGKALAN BALAI (30753) TELEPHONE 0711-891541, 0711-891560 FAXSIMILE 0711-891562 EMAIL pangkalanbalai@banksumselbabel.com",
    },
    // Page 3
    {
      title: "CABANG JAKARTA",
      location: "JAKARTA",
      address:
        "JL. PANGLIMA POLIM RAYA KOMP. GRAND PANGLIMA POLIM N0. 4-6 KEL. PULO KEC. KEBAYORAN BARU JAKARTA SELATAN (12160) TELEPHONE 021-72780883, 021-72780884 FAXSIMILE 021-72800007, 021-72801973 EMAIL jakarta@banksumselbabel.com",
    },
    {
      title: "CABANG INDRALAYA",
      location: "INDRALAYA",
      address:
        "JL. LINTAS TIMUR NO.B 171 KM.32 KELURAHAN INDRALAYA INDAH KECAMATAN INDRALAYA KABUPATEN OGAN ILIR TELP 0711-580555 EMAIL indralaya@banksumselbabel.com",
    },
    {
      title: "CABANG TEBING TINGGI",
      location: "TEBING TINGGI",
      address:
        "JL. LINTAS SUMATRA T. KUPANG TEBING TINGGI TELEPHONE 0702-21540 FAXSIMILE 0702-21502",
    },
    {
      title: "CABANG KOBA",
      location: "KOBA",
      address:
        "JL. RAYA POS KOBA NO. 02 RT 009 KELURAHAN KOBA, KABUPATEN BANGKA TENGAH 33181 PROVINSI KEPULAUAN BANGKA BELITUNG TELEPHONE 0718-61703 FAXSIMILE 0718-61704",
    },
    {
      title: "CABANG JAKABARING",
      location: "PALEMBANG",
      address:
        "JL. GUBERNUR H. AHMAD BASTARI NO. 07 KECAMATAN SEBERANG ULU I KELURAHAN SILABERANTI, SUMATERA SELATAN (30257) TELEPHONE 0711- 5228030, FAXSIMILE 0711-5228030",
    },
    {
      title: "CABANG MUARA DUA",
      location: "MUARA DUA",
      address:
        "JL. PASAR MUARA DUA, KELURAHAN PANCUR PUNGA KECAMATAN MUARA DUA KABUPATEN OKU SELATAN TELEPON : 0735-590591",
    },
    {
      title: "CABANG PENDOPO",
      location: "PALI",
      address:
        "JL. Jl. KEBUN SAYUR (JL. LETNAN SUMANTO) KELURAHAN TALANG UBI TIMUR KABUPATEN MUARA ENIM TELEPHONE 0713-390016/390066 FAXSIMILE 0713- 390086 EMAIL pendopo@banksumselbabel.com",
    },
    {
      title: "CABANG MUARA RUPIT",
      location: "MUARA RUPIT",
      address:
        "JL. LAMA DESA LAWANG AGUNG KEC. MUARA RUPIT",
    },
  ],
  "Cabang Pembantu": [
    {
      title: "Capem Bukit",
      location: "Palembang",
      address:
        "Jl. Bukit Besar No. 88, Palembang TELEPHONE 0711-335555 EMAIL capembukit@banksumselbabel.com",
    },
    {
      title: "Capem Jakabaring",
      location: "Palembang",
      address:
        "Jl. Jakabaring Raya No. 1 TELEPHONE 0711-334433 EMAIL capemjaka@banksumselbabel.com",
    },
    {
      title: "Capem Lemabang",
      location: "Palembang",
      address:
        "Jl. Lemabang Ujung No. 23 TELEPHONE 0711-332211 EMAIL capemlemabang@banksumselbabel.com",
    },
  ],
  "Kantor Kas": [
    {
      title: "Kas UNSRI Indralaya",
      location: "Indralaya",
      address:
        "Kampus UNSRI Indralaya, Gedung Rektorat TELEPHONE 0711-111111 EMAIL kasunsri@banksumselbabel.com",
    },
    {
      title: "Kas Pasar Cinde",
      location: "Palembang",
      address:
        "Jl. Jenderal Sudirman, Palembang TELEPHONE 0711-222222 EMAIL kascinde@banksumselbabel.com",
    },
    {
      title: "Kas RSUP Dr. Rivai Abdullah",
      location: "Palembang",
      address:
        "Komplek Rumah Sakit Rivai Abdullah TELEPHONE 0711-333333 EMAIL kasrsa@banksumselbabel.com",
    },
  ],
};

const BranchTabs = () => {
  const [selectedTab, setSelectedTab] = useState("Kantor Cabang");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const data = kantorData[selectedTab];
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
      <div className="flex space-x-4 border-b border-gray-300 mb-6 justify-center">
        {Object.keys(kantorData).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setSelectedTab(tab);
              setCurrentPage(1);
            }}
            className={`pb-2 px-4 border-b-2 font-semibold text-sm sm:text-base ${
              selectedTab === tab
                ? "border-sky-500 text-sky-600"
                : "border-transparent text-gray-500 hover:text-sky-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow p-5 rounded-lg border border-gray-100"
          >
            <div className="flex items-center text-sky-600 mb-2">
              <FaBuilding className="mr-2" />
              <h3 className="font-bold text-base md:text-lg text-gray-800">
                {item.title}
              </h3>
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-1">
              <FaMapMarkerAlt className="mr-2 text-sky-500" />
              {item.location}
            </div>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {item.address}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 border rounded disabled:opacity-30"
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 rounded border ${
              currentPage === num
                ? "bg-sky-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-1 border rounded disabled:opacity-30"
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default BranchTabs;
