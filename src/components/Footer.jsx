// components/FooterSiFina.jsx
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import footer from "../assets/img/footer.svg";
import logoSifina from "../assets/img/logoSifina.svg";

const footerLinks = {
  layanan: [
    { label: "SiFina Dashboard", href: "#" },
    { label: "SiFina Portal", href: "#" },
  ],
  tentang: [{ label: "Tentang SiFina", href: "#" }],
};

export default function FooterSiFina() {
  return (
    <footer className="text-white text-sm font-normal">
      <img src={footer} alt="Footer" className="w-full" />
      {/* Upper Section */}
      <div className="bg-[#0ea5e9] py-10 px-6 md:px-20 flex flex-col md:flex-row gap-8">
        {/* Branding & Deskripsi */}
        <div className="md:max-w-lg">
          <div className="mb-10">
            <img
              src={logoSifina} // arahkan ke path logo sesuai project-mu
              alt="Logo SiFina Bank Sumsel Babel"
              className="h-12 md:h-16 object-contain"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            Solusi Tepat untuk Kebutuhan Anda!
          </h3>
          <p className="text-sm md:text-base">
            Bank Sumsel Babel secara konsisten terus berkembang, menghadirkan
            layanan terbaik guna mendukung kemajuan dan memenuhi kebutuhan
            daerah Sumatera Selatan dan Bangka Belitung.
          </p>
        </div>

        {/* Menu Sections fixed to right */}
        <div className="flex flex-col md:flex-row gap-10 md:ml-auto md:items-start text-right md:text-left">
          <FooterSection title="Layanan SiFina" links={footerLinks.layanan} />
          <FooterSection title="Tentang SiFina" links={footerLinks.tentang} />
        </div>
      </div>

      {/* Lower Section */}
      <div className="bg-[#0ea5e9] text-center relative py-4">
        <hr className="border-t border-sky-300 my-8" />
        <p>
          © {new Date().getFullYear()}. Divisi Teknologi dan Sistem Informasi PT
          Bank Pembangunan Daerah Sumatera Selatan dan Bangka Belitung
        </p>
      </div>
    </footer>
  );
}

function FooterSection({ title, links }) {
  return (
    <div>
      <h4 className="font-bold mb-2">{title}</h4>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
