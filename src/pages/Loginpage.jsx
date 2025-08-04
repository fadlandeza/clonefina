import { use, useState } from "react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { useNavigate } from "react-router-dom";
import logoBank from "../assets/img/bsb.png";
import logo from "../assets/img/bg-undraw.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import useAuthStore from "../store/useAuthStore";
import api from "../api/api";

const Loginpage = () => {
  const navigate = useNavigate();
  const [no_hp, setNoHp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorNoHp, setErrorNoHp] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const setLogin = useAuthStore((state) => state.setLogin);
  const setNoHpStore = useAuthStore((state) => state.setNoHp);

  const handleLogin = async () => {
    setErrorPassword("");
    setErrorNoHp("");

    let hasError = false;
    if (!no_hp) {
      setErrorNoHp("Nomor HP belum diisi");
      hasError = true;
    } else {
      setErrorNoHp("");
    }

    if (!password) {
      setErrorPassword("Password belum diisi");
      hasError = true;
    } else {
      setErrorPassword("");
    }

    if (hasError) return;

    try {
      const responLogin = await api.post("/login", {
        no_hp,
        password,
      });

      console.log("Response Login :", responLogin.data);
      // Ambil token dari response dan simpan ke store
      if (
        responLogin.data &&
        responLogin.data.data &&
        responLogin.data.data.access_token
      ) {
        setLogin(
          responLogin.data.data.access_token &&
            responLogin.data.data &&
            responLogin.data
        );
      }

      if (responLogin.data && responLogin.data.data) {
        localStorage.setItem("nama", responLogin.data.data.nama);
        localStorage.setItem("email", responLogin.data.data.email);
      }

      //simpan nomor HP ke store

      setNoHpStore(no_hp);

      navigate("/otp-verifikasi");
    } catch (error) {
      let message = "Nomor HP atau password salah";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        message = error.response.data.message;
      }
      setErrorPassword(message);
      setPassword("");
      console.error("Login gagal:", error);
    }
  };

  const handleRegister = () => {
    navigate("/register-akun");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Kiri */}
      <div className="w-full md:w-1/2 p-6 md:p-16 md:pl-24 md:pr-8 flex flex-col justify-center bg-white">
        <p className="text-sm text-sky-400 font-medium mb-2">
          Berdedikasi untuk Daerah
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Sistem Informasi Finansial <span className="font-bold">BSB</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-sky-500 font-bold mb-4">
          Bank Sumsel Babel
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg text-sm md:text-base">
          Kami hadir menyediakan informasi keuangan nasabah Bank Sumsel Babel
          dengan data yang terintegrasi secara real-time dan terlindung.
        </p>
        <img
          src={logo}
          alt="Image Login"
          className="h-40 md:h-90 mb-6 object-contain"
        />
      </div>

      {/* Kanan */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md border border-gray-200 w-full max-w-md">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sky-600 hover:text-sky-800 text-sm font-medium mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <img
            src={logoBank}
            alt="Logo Bank"
            className="h-16 md:h-20 mb-6 mx-auto"
          />
          <h2 className="text-base md:text-lg font-semibold mb-6 text-center">
            Silakan Login ke Aplikasi
          </h2>

          <div className="mb-4">
            <Input
              label="Nomor HP"
              value={no_hp}
              onChange={(e) => {
                setNoHp(e.target.value);
                if (e.target.value) setErrorNoHp("");
              }}
              className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Input Nomor HP"
            />
            {errorNoHp && (
              <p className="text-red-500 text-xs mt-1">{errorNoHp}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value) setErrorPassword("");
              }}
              className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Input Kata Sandi"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[45px] text-gray-500"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
            {errorPassword && (
              <p className="text-red-500 text-xs mt-1">{errorPassword}</p>
            )}
          </div>

          <div className="mb-6 text-right">
            <button
              className="text-sm text-sky-500 hover:underline"
              onClick={() => navigate("/forgot-password")}
            >
              Lupa Kata Sandi?
            </button>
          </div>

          <Button
            text="Masuk"
            color="bg-sky-500 text-white rounded hover:bg-sky-600 mb-4"
            className="w-full py-2 transition"
            onClick={handleLogin}
          />

          <Button
            text="Registrasi Akun"
            color="bg-gray-300 text-white hover:bg-gray-400"
            className="w-full py-2 rounded transition"
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
