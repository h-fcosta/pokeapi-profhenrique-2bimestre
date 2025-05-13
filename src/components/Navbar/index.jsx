import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-yellow-400 text-white shadow">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <NavLink
          to="/"
          className="text-white visited:text-white hover:text-yellow-300 transition"
        >
          Pokédex
        </NavLink>

        <div className="flex gap-6 text-sm sm:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition hover:text-yellow-300 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Início
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
