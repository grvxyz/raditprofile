'use client'

import Image from "next/image"

export default function Home() {
  const SectionPill = ({ title, items }: { title: string, items: string[] }) => (
    <section className="text-center fade-in-up">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-semibold shadow scale-loop"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )

  const ProjectCard = ({
    image,
    title,
    desc,
  }: {
    image: string
    title: string
    desc: string
  }) => (
    <div className="bg-black text-white rounded-xl p-5 transition-transform duration-300 transform hover:scale-[1.015] shadow-[0_0_15px_#ffffff33]">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="rounded-md mb-4"
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-white/70">{desc}</p>
    </div>
  )

  return (
    <>
      <main className="min-h-screen font-sans pt-28 px-8 space-y-12 text-white bg-black">
        {/* Hero */}
        <div className="text-center fade-in-up">
          <Image
            src="/Rads.jpg"
            alt="Rads"
            width={160}
            height={160}
            className="mx-auto rounded-full border-4 border-white shadow-2xl"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 drop-shadow-lg">
            👋 Halo, Saya Raditya Naufal
          </h1>
          <p className="text-lg text-white/80 mt-1">Mahasiswa Sistem Informasi</p>
          <p className="text-sm text-white/70 mt-1">IPK: 3.79 • Prambanan, Sleman</p>
        </div>

        {/* Tentang */}
        <div className="w-full flex justify-center fade-in-up">
          <p className="text-white/80 text-sm leading-relaxed max-w-2xl text-center">
            Saya mahasiswa Sistem Informasi dengan minat pada web development, UI/UX, dan AI. Aktif mengembangkan aplikasi dan suka belajar teknologi baru.
          </p>
        </div>

        {/* Skill */}
        <SectionPill title="Bahasa Pemrograman" items={["PHP", "C++", "Kotlin", "HTML", "CSS", "JavaScript"]} />
        <SectionPill title="Tools & Framework" items={["Tailwind CSS", "Laravel", "MySQL", "Figma", "VS Code", "Android Studio"]} />

        {/* Proyek */}
        <section className="fade-in-up w-full flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Proyek Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            <ProjectCard image="/laundry.png" title="Aplikasi Laundry" desc="Sistem laundry berbasis Codeigniter dengan fitur laporan dan manajemen produk." />
            <ProjectCard image="/tokoku.png" title="Aplikasi Toko Online" desc="Toko Online seperti Tokopedia." />
          </div>
        </section>

        {/* GitHub */}
        <section className="text-center fade-in-up">
          <h2 className="text-2xl font-bold mb-3">Most Used</h2>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=grvxyz&layout=compact&theme=radical"
            alt="Top Languages"
            className="mx-auto rounded-lg shadow-lg"
          />
        </section>

        {/* CTA */}
        <div className="fade-in-up text-center mb-20">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="bg-white text-indigo-700 font-bold text-sm px-6 py-3 rounded-full shadow-xl hover:bg-indigo-600 hover:text-white transition-smooth scale-loop inline-block"
          >
            🚀 Buat Web Saya
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 bg-black text-white py-12 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
          {/* Kontak */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li><a href="mailto:radityanaufal2005@gmail.com" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="https://wa.me/6281228450028" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="https://linkedin.com/in/radityanaufal" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/grvxyz" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>

          {/* QR */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-center">QR Contact</h3>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=BEGIN:VCARD%0AVERSION:3.0%0AN:Naufal;Raditya%0AEMAIL:radityanaufal2005@gmail.com%0ATEL:+6281228450028%0AEND:VCARD&size=150x150"
              alt="QR Code"
              className="border-2 border-white rounded-lg w-[130px] h-[130px]"
            />
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/60 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Created By</h3>
            <p>© 2025 Raditya Naufal</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
