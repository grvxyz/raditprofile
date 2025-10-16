'use client'

import { useState } from "react"
import Image from "next/image"
// @ts-ignore
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        body {
          background: linear-gradient(
            270deg,
            #4c51bf,
            #6b46c1,
            #ed64a6,
            #2b6cb0,
            #d69e2e,
            #48bb78
          );
          background-size: 1200% 1200%;
          animation: gradientBG 20s ease infinite;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes scaleLoop { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }

        .fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .float { animation: float 3s ease-in-out infinite; }
        .scale-loop { animation: scaleLoop 2s ease-in-out infinite; }
        .transition-smooth { transition: all 0.3s ease-in-out; }
        .hover-grow:hover { transform: scale(1.1); transition: transform 0.3s ease-in-out; }
      `}</style>

      <main className="text-white min-h-screen font-sans flex flex-col items-center justify-center p-8 space-y-12">

        {/* Profil */}
        <div className="text-center fade-in-up">
          <Image
            src="/Rads.jpg"
            alt="Rads"
            width={160}
            height={160}
            className="mx-auto rounded-full border-4 border-white shadow-2xl float fade-in-up"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 drop-shadow-lg fade-in-up float">
            👋 Halo, Saya Raditya Naufal
          </h1>
          <p className="text-lg text-white/80 mt-1 fade-in-up float">
            Mahasiswa Sistem Informasi
          </p>
          <p className="text-sm text-white/70 mt-1 fade-in-up float">
            IPK: 3.85 &nbsp;🏡&nbsp; Prambanan, Sleman
          </p>
        </div>

        {/* Tentang Saya */}
        <div className="max-w-3xl text-center fade-in-up" data-aos="fade-up">
          <p className="text-white/80 text-sm leading-relaxed">
            Saya Raditya Naufal, mahasiswa Sistem Informasi semester 5 di Universitas Amikom Yogyakarta, 
            dengan ketertarikan pada front-end development, UI/UX design, dan teknologi web. Saya terbiasa mengembangkan aplikasi 
            menggunakan HTML, CSS, PHP, dan MySQL dengan framework CI 3, serta mulai mengeksplorasi C++, Kotlin, JavaScript, dan Next.
          </p>
        </div>

        {/* Tabel Proyek */}
        <div className="overflow-x-auto mt-6 mb-6" data-aos="fade-up">
          <table className="min-w-full text-left text-sm text-white/80 border border-white/20 rounded-lg">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-2 font-medium">Nama Proyek</th>
                <th className="px-4 py-2 font-medium">Deskripsi</th>
                <th className="px-4 py-2 font-medium">Bahasa</th>
              </tr>
            </thead>
            <tbody className="bg-white/5">
              {[
                ["Kursus", "Website sistem pendaftaran kursus online", "PHP, MySQL"],
                ["Belajar Kotlin", "Kumpulan latihan dasar pemrograman Kotlin", "Kotlin"],
                ["Sistem Cafe", "Aplikasi CLI kasir sederhana", "Go (Golang)"],
                ["Tokoku", "Website toko online sederhana", "PHP, MySQL"],
                ["Tokoku 2", "Versi lanjutan dari Tokoku dengan fitur checkout", "PHP, MySQL"],
                ["Papikos", "Aplikasi Android pencarian kos", "Kotlin"],
                ["Laundryadm", "Sistem admin untuk pengelolaan laundry", "PHP, MySQL"],
                ["Sistem Kasir", "Aplikasi pemesanan menu cafe berbasis C++", "C++"],
                ["SP Tourindo Trans", "Sistem pemesanan wisata dan transportasi", "PHP, MySQL lite"],
                ["Dashboard Sederhana", "Template dashboard admin", "HTML, CSS"],
                ["Heaven Night Club", "Night Club vibe in game", "Lua"],
                ["RaditProfile", "Website portofolio pribadi berbasis Next.js", "TypeScript, CSS, JavaScript"],
              ].map(([nama, desk, bahasa], idx) => (
                <tr
                  key={idx}
                  className="border-t border-white/10 hover:bg-white/10 transition"
                >
                  <td className="px-4 py-2 underline hover:text-white cursor-pointer">{nama}</td>
                  <td className="px-4 py-2">{desk}</td>
                  <td className="px-4 py-2">{bahasa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Most Used */}
        <div className="text-center fade-in-up" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-3">Most Used</h2>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=grvxyz&layout=compact&theme=radical"
            alt="Top Languages"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Bahasa Pemrograman */}
        <div className="text-center fade-in-up" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-3">Bahasa Pemrograman</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["PHP","C++","Kotlin","HTML","CSS","JavaScript","Lua"].map((x) => (
              <span key={x} className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-semibold shadow scale-loop">
                {x}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="text-center fade-in-up" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-3">Tools & Framework</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Tailwind CSS","Codeigniter","MySQL","Figma","VS Code","Android Studio","Roblox Studio"].map((x) => (
              <span key={x} className="bg-white text-gray-700 px-5 py-2 rounded-full text-sm font-semibold shadow scale-loop">
                {x}
              </span>
            ))}
          </div>
        </div>

        {/* Proyek Unggulan */}
        <div className="text-center max-w-4xl w-full fade-in-up" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">Proyek Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              { href: "https://laundrylatte.my.id", img: "/laundry.png", title: "Website Laundry", desc: "Sistem admin untuk pengelolaan laundry" },
              { href: "https://tokoku27812794.my.id", img: "/tokoku.png", title: "Tokoku2781", desc: "Website toko seperti Tokopedia dengan fitur checkout & payment gateway" },
              { href: "https://create.roblox.com/dashboard/creations/experiences/8346198170/overview", img: "/hnc.png", title: "Heaven Night Club", desc: "Social Game Roblox" },
            ].map((p, i) => (
              <a key={i} href={p.href} target="_blank" className="block h-full hover:no-underline">
                <div className="bg-white text-gray-800 rounded-xl shadow-lg p-5 hover-grow h-full flex flex-col">
                  <img src={p.img} className="rounded-md mb-4" alt={p.title} />
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-sm text-gray-600 mt-auto">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Kontak */}
        <div className="text-center fade-in-up mt-10" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-3">Kontak Interaktif</h2>

          <div className="flex justify-center gap-6 text-white text-3xl mb-4">
            <a href="mailto:radityanaufal2005@gmail.com" className="hover:scale-125 transition-transform">📧</a>
            <a href="https://wa.me/6281228450028" target="_blank" className="hover:scale-125 transition-transform">📞</a>
            <a href="https://linkedin.com/in/radityanaufal" target="_blank" className="hover:scale-125 transition-transform">💼</a>
            <a href="https://github.com/grvxyz" target="_blank" className="hover:scale-125 transition-transform">🐙</a>
            <a href="https://www.instagram.com/grvxyz_" target="_blank" className="hover:scale-125 transition-transform">📱</a>
          </div>

          <p className="text-white/60 text-sm">Scan QR untuk simpan kontak:</p>

          <div className="flex flex-col items-center mt-4 space-y-4">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=BEGIN:VCARD%0AVERSION:3.0%0AN:Naufal;Raditya%0AEMAIL:radityanaufal2005@gmail.com%0ATEL:+6281228450028%0AEND:VCARD&size=150x150"
              alt="QR Code vCard"
              className="border-2 border-white rounded-lg"
            />
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-indigo-700 font-bold text-sm px-6 py-3 rounded-full shadow-xl hover:bg-indigo-600 hover:text-white transition-smooth scale-loop"
            >
              📂 Lihat Pengalaman Saya
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white text-gray-800 w-full max-w-4xl p-6 rounded-xl shadow-xl relative max-h-[90vh] overflow-y-auto fade-in-up">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
              Pengalaman & Aktivitas
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">🎓 Pendidikan</h3>
              <table className="w-full text-sm border-separate space-y-2">
                <tbody>
                  <tr>
                    <td className="font-semibold">Universitas Amikom Yogyakarta</td>
                    <td className="text-right text-gray-600">2023 – Sekarang</td>
                  </tr>
                  <tr><td colSpan={2}>Sistem Informasi, IP: 3.85 / 4.00</td></tr>
                  <tr><td className="font-semibold">SMAN 1 Prambanan</td><td className="text-right">2020 – 2023</td></tr>
                  <tr><td className="font-semibold">Muhammadiyah Boarding School Yogyakarta</td><td className="text-right">2017 – 2020</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">👥 Organisasi</h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-indigo-800">HIMASI Amikom</h4>
                  <p className="text-sm text-gray-700">
                    Staff Divisi Eksternal <span className="block text-xs text-gray-500">2024 – Sekarang</span>
                  </p>
                  <p className="text-sm mt-1">
                    Mengelola hubungan eksternal dan konten media sosial (Instagram, TikTok).
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-indigo-800">BEM KM Amikom</h4>
                  <p className="text-sm text-gray-700">
                    Dirjen Web <span className="block text-xs text-gray-500">2025</span>
                  </p>
                  <p className="text-sm mt-1">
                    Bertanggung jawab atas website resmi berbasis PHP dan optimisasi sistem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
