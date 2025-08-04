import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dasboard from "../pages/Dashboard";
import VerifikasiOTP from "../pages/VerifikasiOTP";
import Loginpage from "../pages/Loginpage";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";
import TentangBSB from "../pages/Tentang-BSB";
import TentangSIFina from "../pages/Tentang-SIFina";
import Kontak from "../pages/Kontak";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/dashboard" element={<Dasboard />} />
      <Route path="/tentang-bsb" element={<TentangBSB />} />
      <Route path="/tentang-sifina" element={<TentangSIFina />} />
      <Route path="/kontak" element={<Kontak />} />

      <Route path="/login" element={<Loginpage />} />
      <Route path="/otp-verifikasi" element={<VerifikasiOTP />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/register-akun" element={<Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;

// import {Navigate, Route, Routes} from "react-router-dom";
// import LoginPage from "../page/LoginPage";
// import Dashboard from "../page/Dashboard";

// const Router = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<LoginPage/>} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//     );
// }

// export default Router;
