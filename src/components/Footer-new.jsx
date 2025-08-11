// components/FooterSiFina.jsx
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import footer from "../assets/img/footer.svg";
import logoSifina from "../assets/img/logoSifina.svg";

const footerLinks = {
  pages: [
    { label: "Pages 1", href: "#" },
    { label: "Pages 2", href: "#" },
    { label: "Pages 3", href: "#" },
  ],
  blog: [
    { label: "Blog 1", href: "#" },
    { label: "Blog 2", href: "#" },
    { label: "Blog 3", href: "#" },
  ],
  portofolio: [
    { label: "Portofolio 1", href: "#" },
    { label: "Portofolio 2", href: "#" },
    { label: "Portofolio 3", href: "#" },
  ],
};

export default function FooterSiFina() {
  return (
    <footer className="text-white text-sm font-normal">
      {/* Upper Section */}
      <div className="bg-[#f1d632] py-10 px-6 md:px-20 flex flex-col md:flex-row gap-8">
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
          {/* Definisikan Yang Menu Ada Dropdown or Mau ditampilkan di Footer */}
          <FooterSection title="Pages" links={footerLinks.pages} />
          <FooterSection title="Blog" links={footerLinks.blog} />
          <FooterSection title="Portofolio" links={footerLinks.portofolio} />
        </div>
      </div>

      {/* Lower Section */}
      <div className="bg-[#f1d632] text-center relative py-4">
        <hr className="border-t border-gray-300 my-8" />
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
