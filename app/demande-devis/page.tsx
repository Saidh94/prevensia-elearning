export default function DemandeDevis() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
          PREVENSIA FORMATION
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Demande de devis
        </h1>
        <p className="mt-4 text-slate-600">
          Décrivez votre besoin en habilitation électrique, sécurité incendie ou exploitation sprinkler.
        </p>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
          <p><strong>Email :</strong> prevensia.formation@outlook.fr</p>
          <p><strong>Téléphone :</strong> 01 89 62 94 92</p>
        </div>

        <form
          action="https://formspree.io/f/myknqwyb"
          method="POST"
          className="mt-8 grid gap-5"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Vous êtes
            </label>
            <select
              name="profil"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700"
            >
              <option>Particulier</option>
              <option>Professionnel</option>
            </select>
          </div>

          <div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Type de formation
  </label>

  <select
    name="type_formation"
    required
    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition"
  >
    <option value="">Sélectionnez une formation</option>
    <option value="habilitation-electrique">Habilitation électrique</option>
    <option value="sst">SST – Sauveteur Secouriste du Travail</option>
    <option value="exploitation-ssi">Exploitation du SSI</option>
    <option value="sprinkler">Exploitation sprinkler</option>
    <option value="manipulation-extincteurs">Manipulation des extincteurs</option>
    <option value="guide-file-serre-file">Guide-file / Serre-file</option>
    <option value="evacuation-incendie">Évacuation incendie</option>
    <option value="autre">Autre besoin en formation sécurité</option>
  </select>
</div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              required
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Société
            </label>
            <input
              type="text"
              name="societe"
              placeholder="Nom de la société"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Téléphone
            </label>
            <input
              type="tel"
              name="telephone"
              placeholder="Votre téléphone"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Nombre de participants
            </label>
            <input
              type="number"
              name="participants"
              placeholder="Ex : 8"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Décrivez votre besoin"
              required
              className="min-h-[160px] w-full rounded-[1.5rem] border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700"
            />
          </div>

          <button
            type="submit"
            className="rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </main>
  );
}