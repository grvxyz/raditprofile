"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Repo {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

export default function HomePage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });

    // Ambil data repositori GitHub milik grvxyz
    fetch("https://api.github.com/users/grvxyz/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 10))) // tampilkan 10 terbaru
      .catch((err) => console.error("Gagal ambil repositori:", err));
  }, []);

  return (
    <main className="min-h-screen text-white font-sans relative overflow-x-hidden">
      {/* Background animasi */}
      <div className="fixed inset-0 -z-10 animate-[gradientBG_20s_ease_infinite]" 
        style={{
          background:
            "linear-gradient(270deg,#4c51bf,#6b46c1,#ed64a6,#2b6cb0,#d69e2e,#48bb78)",
          backgroundSize: "1200% 1200%",
        }}
      />

      {/* Profil */}
      <section className="flex flex-col items-center justify-center text-center p-8 space-y-4" data-aos="fade-up">
        <img
          src="/assets/Rads.jpg"
          alt="Rads"
          className="w-40 h-40 rounded-full border-4 border-white shadow-2xl animate-[float_3s_ease-in-out_infinite]"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 drop-shadow-lg animate-[fadeInUp_1s_ease-out_forwards]">
          👋 Halo, Saya Raditya Naufal
        </h1>
        <p className="text-lg text-white/80 mt-1">Mahasiswa Sistem Informasi</p>
        <p className="text-sm text-white/70 mt-1">IPK: 3.85 🏡 Prambanan, Sleman</p>
      </section>

      {/* Tentang Saya */}
      <section className="max-w-3xl mx-auto text-center p-6" data-aos="fade-up">
        <p className="text-white/80 text-sm leading-relaxed">
          Saya Raditya Naufal, mahasiswa Sistem Informasi semester 5 di Universitas Amikom Yogyakarta,
          dengan ketertarikan pada front-end development, UI/UX design, dan teknologi web.
          Saya terbiasa mengembangkan aplikasi menggunakan HTML, CSS, PHP, dan MySQL dengan framework CI 3,
          serta mulai mengeksplorasi C++, Kotlin, JavaScript, dan Next.
        </p>
      </section>

      {/* Tabel Repo */}
      <section className="max-w-4xl mx-auto p-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-3 text-center">📦 Repositori GitHub</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-white/80 border border-white/20 rounded-lg">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-2 font-medium">Nama Proyek</th>
                <th className="px-4 py-2 font-medium">Deskripsi</th>
                <th className="px-4 py-2 font-medium">Bahasa</th>
              </tr>
            </thead>
            <tbody className="bg-white/5">
              {repos.map((repo) => (
                <tr key={repo.name} className="border-t border-white/10 hover:bg-white/10 transition">
                  <td className="px-4 py-2">
                    <a href={repo.html_url} target="_blank" className="underline hover:text-white">
                      {repo.name}
                    </a>
                  </td>
                  <td className="px-4 py-2">{repo.description || "—"}</td>
                  <td className="px-4 py-2">{repo.language || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Most Used (GitHub Readme Stats) */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-3">Most Used</h2>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=grvxyz&layout=compact&theme=radical"
          alt="Top Languages"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Bahasa Pemrograman */}
      <div className="text-center mt-12" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-3">Bahasa Pemrograman</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["PHP","C++","Kotlin","HTML","CSS","JavaScript","Lua"].map((lang) => (
            <span key={lang} className="bg-white text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold shadow animate-[scaleLoop_2s_ease-in-out_infinite]">
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Framework */}
      <div className="text-center mt-10" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-3">Tools & Framework</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["Tailwind CSS","CodeIgniter","MySQL","Figma","VS Code","Android Studio","Roblox Studio"].map((tool) => (
            <span key={tool} className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-semibold shadow animate-[scaleLoop_2s_ease-in-out_infinite]">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Proyek Unggulan */}
      <section className="text-center max-w-4xl mx-auto p-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-6">Proyek Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard title="Website Laundry" image="/assets/laundry.png" url="https://laundrylatte.my.id" desc="Sistem admin untuk pengelolaan laundry" />
          <ProjectCard title="Tokoku2781" image="/assets/tokoku1.png" url="https://tokoku27812794.my.id" desc="Website toko seperti Tokopedia dengan payment gateway" />
          <ProjectCard title="Heaven Night Club" image="/assets/hnc.png" url="https://create.roblox.com/dashboard/creations/experiences/8346198170/overview" desc="Social Game Roblox" />
        </div>
      </section>

      {/* Kontak + Modal */}
      <section className="text-center mt-10 mb-10" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-3">Kontak Interaktif</h2>
        <div className="flex justify-center gap-6 text-3xl mb-4">
          <a href="mailto:radityanaufal2005@gmail.com">📧</a>
          <a href="https://wa.me/6281228450028">📞</a>
          <a href="https://linkedin.com/in/radityanaufal">💼</a>
          <a href="https://github.com/grvxyz">🐙</a>
          <a href="https://instagram.com/grvxyz_">📱</a>
        </div>

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=BEGIN:VCARD%0AVERSION:3.0%0AN:Naufal;Raditya%0AEMAIL:radityanaufal2005@gmail.com%0ATEL:+6281228450028%0AEND:VCARD&size=150x150"
          alt="QR vCard"
          className="mx-auto border-2 border-white rounded-lg"
        />

        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-white text-indigo-700 font-bold text-sm px-6 py-3 rounded-full shadow-xl hover:bg-indigo-600 hover:text-white transition"
        >
          📂 Lihat Pengalaman Saya
        </button>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white text-gray-800 w-full max-w-4xl p-6 rounded-xl shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Pengalaman & Aktivitas</h2>
            <p className="text-gray-700 text-sm">
              🎓 Universitas Amikom Yogyakarta — Sistem Informasi (2023 – Sekarang)
            </p>
            <p className="text-gray-700 text-sm mt-2">👥 HIMASI Amikom — Staff Divisi Eksternal</p>
            <p className="text-gray-700 text-sm mt-2">💼 BEM KM Amikom — Dirjen Web (2025)</p>
          </div>
        </div>
      )}

      {/* Tombol Scroll */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-white text-indigo-600 px-4 py-2 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition"
      >
        ⬆️ Atas
      </button>

      {/* Footer */}
      <footer className="mt-12 text-xs text-white/60 text-center">&copy; 2025 Raditya Naufal. All rights reserved.</footer>
    </main>
  );
}

function ProjectCard({ title, image, url, desc }: { title: string; image: string; url: string; desc: string }) {
  return (
    <a href={url} target="_blank" className="block hover:no-underline h-full">
      <div className="bg-white text-gray-800 rounded-xl shadow-lg p-5 hover:scale-105 transition-transform h-full flex flex-col">
        <img src={image} alt={title} className="rounded-md mb-4" />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mt-auto">{desc}</p>
      </div>
    </a>
  );
}
