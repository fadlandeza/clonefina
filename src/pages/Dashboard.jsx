import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import api from "../api/api";
import Button from "../components/button/Button";
import useAuthStore from "../store/useAuthStore";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const navigate = useNavigate();

  //fungsi no rekening
  const accessToken = useAuthStore.getState().token;
  const [saldo, setSaldo] = useState("");
  const [nama, setNama] = useState(localStorage.getItem("nama"));
  const [noRekening, setNoRekening] = useState("");
  const [showSaldo, setShowSaldo] = useState(true);
  const [noHp, setNoHpData] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [tanggalSekarang, setTanggalSekarang] = useState("");

  const handleChange = (e) => {
    setNoRekening(e.target.value);
  }

  useEffect(() => {
    const sekarang = new Date();
    const formatTanggal = sekarang.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setTanggalSekarang(formatTanggal);
  }, []);

  const handlenorekening = async () => {
    try {
      const responseSaldo = await api.post(
        "/getsaldo",
        {
          no_hp: "081901112222",
          no_rekening: "1200100001111",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response getsaldo:", responseSaldo);
      // Cek apakah data ada di response.data.data
      const data = responseSaldo.data.data || responseSaldo.data;
      setSaldo(data.saldo);
      setNoRekening(data.no_rekening);
      setNoHpData(data.no_hp);
    } catch (error) {
      setSaldo("Gagal mengambil saldo");
      setNama("");
      setNoRekening("");
      setNoHpData("");
      setEmail("");
      console.error("Error Mengambil Nomor Rekening :", error);
    }
  };

  useEffect(()=>{
    handlenorekening()
  },[])


  //simpan data rekening

  //Fungsi Logout
  const { setNoHpStore, token, no_hp } = useAuthStore();

  const handleLogout = async () => {
    try {
      await api.post("/logout", { no_hp });
    } catch (error) {
      console.error("Logout error:", error);
    }
    localStorage.clear();
    navigate("/login");
  };

  const toggleSaldo = () => setShowSaldo(!showSaldo);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 min-h-screen sm:ml-64">
        <div className="mt-10">
          <h1 className="text-xl font-semibold text-gray-700 mt-5">
            Selamat Datang,{" "}
            <span className="text-sky-600">{nama || "User"}.</span>
          </h1>
          <p className="text-sm text-gray-400 mb-6">{tanggalSekarang}</p>
        </div>

        {/* Saldo Card */}
        <div className="bg-gradient-to-r from-indigo-400 to-purple-400 text-white rounded-2xl p-6 w-full md:max-w-xl mb-6 shadow-md relative">
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-2">
            {nama?.toUpperCase() || "NAMA USER"}
          </h2>
          <p className="text-xs mt-1 mb-4">Saldo Tersedia</p>
          <div className="relative">
            <p className="text-3xl font-bold mb-6">
              Rp {showSaldo ? Number(noHp).toLocaleString("id-ID") : "••••••"}
            </p>

            <div
              className="absolute right-6 top-2 opacity-70 text-white cursor-pointer"
              onClick={toggleSaldo}
            >
              {showSaldo ? (
                <EyeSlashIcon className="w-6 h-6" />
              ) : (
                <EyeIcon className="w-6 h-6" />
              )}
            </div>
          </div>
          <p className="text-xs opacity-90">Rekening {noRekening || " "}</p>
        </div>

        {/* Dropdown Rekening */}
        <div className="w-full md:max-w-xl mb-8">
          <select value={noRekening} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500">
            <option>Pilih Rekening</option>
            {noRekening && (
              <option value={noRekening}>{`${noRekening} - ${nama || "Pengguna"}`}</option>
            )}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:max-w-xl">
          <Button
            text="Tampil No Rekening"
            color="w-full bg-sky-700 text-white py-2 rounded hover:bg-sky-800 transition"
            onClick={handlenorekening}
          />

          <Button
            text="Logout"
            color="w-full bg-red-400 text-white py-2 rounded hover:bg-red-500 transition"
            onClick={handleLogout}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;