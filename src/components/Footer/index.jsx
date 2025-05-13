export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 w-full bg-gray-900/50 text-gray-400 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs sm:text-sm">
        <p>
          Dados fornecidos por&nbsp;
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            PokéAPI
          </a>
        </p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} Prof. Henrique Costa • Projeto de
          aula
        </p>
      </div>
    </footer>
  );
}
