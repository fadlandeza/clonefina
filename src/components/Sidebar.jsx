import { useState } from "react";
import logoSifina from "../assets/img/logo-sifinafull.png";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import api from "../api/api";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {/* Tombol Hamburger - hanya tampil di mobile dan saat sidebar tertutup */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 bg-white shadow-md p-6
        ${open ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        <div className="mb-8">
          <img src={logoSifina} alt="Logo SIFina" className="w-35" />
        </div>

        <nav className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-gray-400 mb-1">Dashboard</p>
          <button className="flex items-center gap-2 p-2 bg-sky-100 text-sky-600 rounded-md font-semibold w-full text-left">
            <span>
              {/* Icon Home */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-6"
                viewBox="0 0 24 24"
              >
                <path d="M11.47 3.841a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.061l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 101.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159v6.198a1.875 1.875 0 01-1.875 1.875H15v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21H5.625A1.875 1.875 0 013.75 19.125V12.59l8.25-8.25Z" />
              </svg>
            </span>
            Beranda
          </button>

          <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md w-full text-left">
            <span>
              {/* Icon Book */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-6"
                viewBox="0 0 24 24"
              >
                <path d="M11.25 4.533A9.707 9.707 0 006 3 9.735 9.735 0 002.75 3.555v14.25a.75.75 0 001 .707 8.237 8.237 0 012.25-.762c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47V4.262A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
            </span>
            Informasi Rekening
          </button>

          <p className="text-sm font-semibold text-gray-400 mb-1">QRIS</p>
          <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md w-full text-left">
            <span>
              {/* Icon QRIS */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-6"
                viewBox="0 0 24 24"
              >
                <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384V12.75c0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875v-1.993a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
              </svg>
            </span>
            Informasi QRIS
          </button>

          <p className="text-sm font-semibold text-gray-400 mb-1">
            Virtual Account
          </p>
          <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md w-full text-left">
            <span>
              {/* Icon VA */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-6"
                viewBox="0 0 24 24"
              >
                <path d="M4.5 3.75a3 3 0 00-3 3V7.5h21v-.75a3 3 0 00-3-3h-15z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                />
              </svg>
            </span>
            Informasi VA
          </button>

          <hr className="border-t border-gray-200" />

          <button
            className="flex items-center justify-end gap-2 p-2 text-gray-400 hover:bg-gray-100 rounded-md w-full text-left"
            onClick={handleLogout}
          >
            <span>
              {/* Icon VA */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Logout
          </button>
        </nav>
      </aside>

      {/* Overlay jika sidebar terbuka di mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-20 z-30 sm:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;