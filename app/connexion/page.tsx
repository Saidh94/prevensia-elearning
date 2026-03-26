export default function Connexion() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Connexion espace e-learning
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border p-3 rounded-xl mb-6"
        />

        <button className="w-full bg-red-700 text-white p-3 rounded-xl font-semibold">
          Se connecter
        </button>

        <p className="text-sm mt-4">
          Pas encore inscrit ?{" "}
          <a href="/inscription" className="text-red-700 font-semibold">
            Créer un compte
          </a>
        </p>
      </div>
    </main>
  );
}