
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-center text-white">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">
        Estilo e tradição
      </p>

      <h1 className="mb-6 text-5xl font-bold md:text-7xl">
        Barbearia Prime
      </h1>

      <p className="mb-8 max-w-xl text-lg text-zinc-300">
        Mais que um corte, uma experiência.
        Venha renovar seu estilo com nossos profissionais.
      </p>

      <a
        href="https://wa.me/5561999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-amber-500 px-8 py-4 font-semibold text-zinc-950 transition hover:bg-amber-400"
      >
        Agende seu horário
      </a>
    </main>
  );
}
