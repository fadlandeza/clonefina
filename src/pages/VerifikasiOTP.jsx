import { useState, useRef, useEffect } from "react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { useNavigate } from "react-router-dom";
import logoBank from "../assets/img/bsb.png";
import logoLogin from "../assets/img/bg-undraw.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import useAuthStore from "../store/useAuthStore";
import api from "../api/api";

const VerifikasiOTP = () => {
  const navigate = useNavigate();
  const [no_hp, setNoHp] = useState("");
  // Ambil nomor HP dari store saat komponen mount pakai hook useEffect
  useEffect(() => {
    const storedNoHp = useAuthStore.getState().no_hp;
    if (storedNoHp) {
      setNoHp(storedNoHp);
    }
  }, []);

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorNoHp, setErrorNoHp] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorGlobal, setErrorGlobal] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);
  const setToken = useAuthStore((state) => state.setToken);
  const setNoHpStore = useAuthStore((state) => state.setNoHp);

  const handleSubmit = async () => {
    const enteredOtp = otp.join("");
    if (!no_hp) {
      setErrorGlobal("Nomor HP tidak ditemukan. Silakan login ulang.");
      return;
    }

    if (enteredOtp.length !== 6) {
      setErrorGlobal("Kode OTP harus 6 digit.");
      return;
    }

    try {
      const response = await api.post("/verify-otp", {
        no_hp,
        otp: enteredOtp,
      });

      if (response.data.respCode === "0000") {
        const accessToken = response.data.data.access_token;
        setToken(accessToken);
        navigate("/dashboard");
      } else {
        setErrorGlobal("Verifikasi OTP gagal. Coba lagi.");
      }
    } catch (error) {
      console.error("Verifikasi OTP error :", error);
      setErrorGlobal("Terjadi kesalahan pada server.");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  // Kotak Input OTP Handle
  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="w-full md:w-1/2 p-6 md:p-16 md:pl-24 md:pr-8 flex flex-col justify-center bg-white">
        <p className="text-sm text-sky-400 font-medium mb-2">
          Berdedikasi untuk Daerah
        </p>
        <h1 className="text-3xl font-bold mb-2">
          Sistem Informasi Finansial <span className="font-bold">(SIFina)</span>
        </h1>
        <h2 className="text-2xl text-sky-500 font-bold mb-4">
          Bank Sumsel Babel
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg">
          Kami hadir menyediakan informasi keuangan nasabah Bank Sumsel Babel
          dengan data yang terintegrasi secara real-time dan terlindung.
        </p>
        <img src={logoLogin} alt="Ilustrasi Login" className="h-100 mb-6" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md border border-gray-200 w-full max-w-md">
          <img src={logoBank} alt="Logo Bank" className="h-10 mb-6" />

          {errorGlobal && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {errorGlobal}
            </div>
          )}

          <h3 className="text-lg font-semibold mb-6 text-center">
            Verifikasi OTP
          </h3>
          {/* Cetak No.HP yang sedang login */}
          {no_hp ? (
            <p className="text-sm text-gray-600 mb-6 text-center">
              Masukkan kode OTP yang telah dikirim ke <strong>{no_hp}</strong>.
            </p>
          ) : (
            <p className="text-sm mb-6 text-center text-red-500">
              Nomor HP tidak ditemukan. Silakan login ulang.
            </p>
          )}

          <div className="flex justify-center space-x-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400 text-lg font-bold"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>

          <Button
            onClick={handleSubmit}
            color="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600 transition mb-4"
            text="Verifikasi"
          />

          <Button
            onClick={handleLogin}
            color="w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-500 transition"
            text="Kembali"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifikasiOTP;
