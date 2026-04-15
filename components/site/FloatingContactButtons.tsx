"use client";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href="tel:+33189629492"
        className="flex items-center justify-center rounded-full bg-red-700 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-red-800"
        aria-label="Appeler Prevensia Formation"
        title="Appeler"
      >
        Appeler
      </a>

      <a
        href="https://wa.me/33780992417?text=Bonjour%20je%20souhaite%20des%20informations%20sur%20vos%20formations"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full border border-green-300 bg-white px-4 py-3 text-sm font-semibold text-green-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-green-50"
        aria-label="Contacter Prevensia Formation sur WhatsApp"
        title="WhatsApp"
      >
        WhatsApp
      </a>

      <a
        href="https://www.linkedin.com/in/prevensia-formation-3450a0385/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50"
        aria-label="Voir LinkedIn Prevensia Formation"
        title="LinkedIn"
      >
        LinkedIn
      </a>
    </div>
  );
}