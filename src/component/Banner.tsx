import { useState } from "react";
import {
  LuChefHat,
  LuClock3,
  LuUsers,
  LuMenu,
  LuX,
  LuHouse,
  LuBookOpen,
  LuInfo,
} from "react-icons/lu";

function Banner() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="bg-linear-to-r from-[#183D2B] to-[#245438] text-white mb-20">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-6 py-5 md:px-12">
          {/* LOGO */}
          <a
            href="/"
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <LuChefHat aria-hidden="true" className="text-3xl" />

            <span>Recipe</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="rounded-md px-2 py-1 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
            >
              Home
            </a>

            <a
              href="/recipes"
              className="rounded-md px-2 py-1 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
            >
              Recipes
            </a>

            <a
              href="/about"
              className="rounded-md px-2 py-1 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
            >
              About
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="rounded-lg p-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white md:hidden"
          >
            <LuMenu aria-hidden="true" className="text-3xl" />
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Overlay */}
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-black/40"
            />

            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-72 bg-white p-6 text-gray-900 shadow-xl">
              {/* Menu Header */}
              <div className="flex items-center justify-between">
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-xl font-bold"
                >
                  <LuChefHat
                    aria-hidden="true"
                    className="text-2xl text-green-800"
                  />

                  <span>Recipe</span>
                </a>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="rounded-lg p-2 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-green-700"
                >
                  <LuX aria-hidden="true" className="text-2xl" />
                </button>
              </div>

              {/* MOBILE NAVIGATION LINKS */}
              <div className="mt-10 flex flex-col gap-2">
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-green-700"
                >
                  <LuHouse
                    aria-hidden="true"
                    className="text-xl text-green-800"
                  />

                  <span>Home</span>
                </a>

                <a
                  href="/recipes"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-green-700"
                >
                  <LuBookOpen
                    aria-hidden="true"
                    className="text-xl text-green-800"
                  />

                  <span>Recipes</span>
                </a>

                <a
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-green-700"
                >
                  <LuInfo
                    aria-hidden="true"
                    className="text-xl text-green-800"
                  />

                  <span>About</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* HERO CONTENT */}
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-8 md:px-12 md:pb-12 md:pt-10">
          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Chicken Pasta
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-100 md:text-lg">
            A simple and delicious chicken pasta recipe with chicken, perfect
            for a quick and healthy meal.
          </p>

          {/* RECIPE INFORMATION */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            {/* COOKING TIME */}
            <div className="flex items-center gap-2">
              <LuClock3 aria-hidden="true" className="text-xl" />

              <span>30 minutes</span>
            </div>

            {/* SERVINGS */}
            <div className="flex items-center gap-2">
              <LuUsers aria-hidden="true" className="text-xl" />

              <span>2 servings (original)</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Banner;