import { useState } from "react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import logoBank from "../assets/img/bsb.png";
import logo from "../assets/img/logo-register.svg";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

function Register() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!image) newErrors.image = "Foto Profile Belum Di-Upload";
    if (!username) newErrors.username = "Username Belum Diisi";
    if (!email) newErrors.email = "Email Belum Diisi";
    if (!position) newErrors.position = "Posisi Belum Diisi";
    if (!password) newErrors.password = "Password Belum Diisi";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    // Simulasi submit
    const formData = new FormData();
    formData.append("image", image);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("position", position);
    formData.append("password", password);
    // Kirim ke backend di sini
    alert("Register berhasil!");
    navigate("/dashboard");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Kiri */}
      <div className="w-1/2 p-16 pl-24 pr-8 flex flex-col justify-center bg-white">
        <p className="text-sm text-sky-400 font-medium mb-2">
          Berdedikasi untuk Daerah
        </p>
        <h1 className="text-3xl font-bold mb-2">
          Registrasi Akun BSB <span className="font-bold">BSB</span>
        </h1>
        <h2 className="text-2xl text-sky-500 font-bold mb-4">
          Bank Sumsel Babel
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg">
          Kami hadir memberikan kemudahan bagi calon nasabah Bank Sumsel Babel
          untuk melakukan registrasi akun dengan proses yang cepat, aman, dan
          terintegrasi secara real-time.
        </p>
        <div className="flex space-x-4">
          {/* Simbol & grafik bisa diubah ke gambar ilustrasi atau SVG */}
          <img src={logo} alt="Image Login" className="h-90 mb-6" />
        </div>
      </div>

      {/* Kanan */}
      <div className="w-1/2 flex items-center justify-center bg-white min-h-screen">
        <div className="bg-white p-10 px-20 rounded-lg shadow-md border border-gray-200 w-full max-w-2xl">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-sky-600 hover:text-sky-800 text-sm font-medium mb-4"
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
          <div className="flex justify-center mb-6">
            <img
              src={logoBank}
              alt="Logo Bank"
              className="h-20 object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold mb-6">Pendaftaran Akun Baru</h2>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Foto Profil</label>
            {/* Preview Foto yang Sudah di Upload */}
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="mt-2 h-20 w-20 object-cover rounded-full border"
              />
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {errors.image && (
              <div className="text-red-500 text-xs mt-1">{errors.image}</div>
            )}
          </div>

          <div className="mb-4">
            <Input
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Masukkan Username"
            />
            {errors.username && (
              <div className="text-red-500 text-xs mt-1">{errors.username}</div>
            )}
          </div>

          <div className="mb-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Masukkan Email"
            />
            {errors.email && (
              <div className="text-red-500 text-xs mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <Input
              label="Posisi"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Masukkan Posisi/Jabatan"
            />
            {errors.position && (
              <div className="text-red-500 text-xs mt-1">{errors.position}</div>
            )}
          </div>

          <div className="mb-6 relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Masukkan Password"
            />
            <button
              className="absolute right-3 top-3 bottom-6 translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
            {errors.password && (
              <div className="text-red-500 text-xs mt-1">{errors.password}</div>
            )}
          </div>

          <Button
            text="Register"
            className="w-full py-2 rounded transition-colors duration-200"
            color="bg-sky-400 hover:bg-sky-500 text-white font-semibold mb-4"
            onClick={handleSubmit}
          />

          <Button
            text="Sudah Punya Akun ?"
            className="w-full py-2 rounded transition-colors duration-200"
            color="bg-gray-300 hover:bg-gray-400 text-white font-semibold"
            onClick={handleLogin}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
