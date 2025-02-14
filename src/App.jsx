// App.jsx
import { useState } from "react";
import {
  FaGooglePlay,
  FaAppStore,
  FaHeart,
  FaHistory,
  FaUsers,
  FaBars,
  FaTimes,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Fitur", href: "#features" },
    { name: "Download", href: "#download" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <FaHeart className="text-2xl text-pink-600" />
              <span className="text-xl font-bold text-pink-600">
                Celengan Couple
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-pink-600 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 ml-4">
                <a
                  href="https://celengancouple.vercel.app/celengan_couple.apk"
                  download="celengan_couple.apk"
                  className="btn-download bg-gradient-to-br from-pink-400 to-purple-500"
                >
                  <FaDownload />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4">
              <div className="flex flex-col items-center gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-pink-600 px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex gap-4 ml-4">
                  <a
                    href="https://celengancouple.vercel.app/celengan_couple.apk"
                    download="celengan_couple.apk"
                    className="btn-download bg-gradient-to-br from-pink-400 to-purple-500"
                  >
                    <FaDownload />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex items-center justify-center flex-col lg:flex-row gap-10"
        >
          <div className="w-full md:w-[50%]">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text h-24 md:h-18 text-transparent mb-6">
              Bangun Masa Depan Bersama
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Aplikasi tabungan pasangan pertama di Indonesia yang memudahkan
              kamu dan pasangan mengelola keuangan bersama
            </p>
            <div className="flex gap-4 w-full justify-center">
              <a
                href="https://celengancouple.vercel.app/celengan_couple.apk"
                download="celengan_couple.apk"
                className="btn-download bg-gradient-to-br from-pink-400 to-purple-500"
              >
                <FaDownload />
                <span>Download</span>
              </a>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative max-w-2xl mx-auto w-full lg:w-[50%]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 blur-2xl opacity-30 rounded-full" />
            <img
              src="mockup.png"
              alt="App Preview"
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl "
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 text-pink-600"
          >
            Fitur Unggulan
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers />,
                title: "Akun Bersama",
                desc: "Kelola tabungan berdua dalam satu akun bersama dengan akses penuh untuk kedua pasangan",
              },
              {
                icon: <FaHeart />,
                title: "Pantau Kontribusi",
                desc: "Lihat perkembangan tabungan masing-masing pasangan secara real-time",
              },
              {
                icon: <FaHistory />,
                title: "Riwayat Transaksi",
                desc: "Catatan lengkap semua transaksi dengan detail waktu dan keterangan",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="feature-card p-8 rounded-2xl bg-white border border-pink-50 hover:border-pink-100 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="text-4xl text-pink-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-16 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block"
          >
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-pink-600">
                Mulai Menabung Bersama
              </h2>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="btn-download bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                >
                  <FaDownload />
                  <a
                    href="https://celengancouple.vercel.app/celengan_couple.apk"
                    download="celengan_couple.apk"
                  >
                    Download Celengan Couple
                  </a>
                </motion.a>
              </div>
              <p className="text-gray-500 mt-4 text-sm">
                Tersedia untuk Android, untuk IOS segera hadir!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Celengan Couple</h3>
              <p className="text-sm opacity-80">
                Membantu pasangan Indonesia mencapai tujuan finansial bersama
                dengan mudah dan transparan
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan Cepat</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 Celengan Couple. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
