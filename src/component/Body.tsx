import { useState } from "react";
import { LuMinus, LuPlus, LuInfo } from "react-icons/lu";

const Body = () => {
  const [servings, setServings] = useState(2);

  const ingredients = [
    { name: "Pasta (penne)", quantity: 200, unit: "g" },
    { name: "Chicken breast", quantity: 150, unit: "g" },
    { name: "Onion", quantity: 1, unit: "medium" },
    { name: "Garlic", quantity: 2, unit: "cloves" },
    { name: "Cherry tomatoes", quantity: 100, unit: "g" },
    { name: "Olive oil", quantity: 2, unit: "tbsp" },
    { name: "Salt", quantity: 0, unit: "to taste" },
    { name: "Black pepper", quantity: 0, unit: "to taste" },
    { name: "Parmesan cheese", quantity: 50, unit: "g" },
  ];

  const formatQuantity = (quantity: number) => {
    if (Number.isInteger(quantity)) {
      return quantity.toString();
    }

    return quantity.toFixed(2).replace(/\.?0+$/, "");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pt-4 pb-8 md:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-base font-bold text-gray-900 sm:text-lg">
              Select servings
            </h2>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setServings((prev) => Math.max(0, prev - 1))
                }
                aria-label="Decrease servings"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-900 transition hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2 sm:h-14 sm:w-14"
              >
                <LuMinus
                  aria-hidden="true"
                  className="text-xl"
                />
              </button>

              <div
                className="flex h-12 w-16 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-xl font-bold text-gray-900 sm:h-14 sm:w-20"
                aria-label={`Current servings: ${servings}`}
              >
                {servings}
              </div>

              <button
                type="button"
                onClick={() => setServings((prev) => prev + 1)}
                aria-label="Increase servings"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#183D2B] text-white transition hover:bg-[#245438] focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2 sm:h-14 sm:w-14"
              >
                <LuPlus
                  aria-hidden="true"
                  className="text-xl"
                />
              </button>
            </div>
          </div>
        </section>

        <section
          className="rounded-xl bg-green-50 p-4"
          aria-label="Recipe information"
        >
          <div className="flex items-start gap-4">
            <LuInfo
              aria-hidden="true"
              className="mt-1 shrink-0 text-2xl text-[#183D2B]"
            />

            <p className="text-sm leading-6 text-gray-800 sm:text-base">
              Ingredient quantities are adjusted automatically based on the
              selected servings.
            </p>
          </div>
        </section>
      </div>

      <p
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        Servings updated to {servings}. Ingredient quantities have been
        adjusted.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Ingredients
          </h2>

          <ul className="space-y-3">
            {ingredients.map((ingredient) => {
              const adjustedQuantity =
                ingredient.quantity * (servings / 2);

              return (
                <li
                  key={ingredient.name}
                  className="flex justify-between gap-4 border-b pb-3"
                >
                  <span className="min-w-0">{ingredient.name}</span>

                  <span className="shrink-0 text-right">
                    {ingredient.quantity === 0
                      ? ingredient.unit
                      : `${formatQuantity(adjustedQuantity)} ${ingredient.unit}`}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Method
          </h2>

          <ol className="space-y-6">
            <li className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800"
              >
                1
              </span>

              <div>
                <h3 className="font-semibold">Cook the pasta</h3>

                <p className="mt-1 text-gray-600">
                  Cook the pasta according to the package instructions.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800"
              >
                2
              </span>

              <div>
                <h3 className="font-semibold">Prepare the chicken</h3>

                <p className="mt-1 text-gray-600">
                  Cut the chicken into small pieces and season with salt and
                  pepper.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800"
              >
                3
              </span>

              <div>
                <h3 className="font-semibold">Cook the chicken</h3>

                <p className="mt-1 text-gray-600">
                  Heat olive oil in a pan and cook the chicken until golden
                  brown.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800"
              >
                4
              </span>

              <div>
                <h3 className="font-semibold">Add vegetables</h3>

                <p className="mt-1 text-gray-600">
                  Add onion, garlic and cherry tomatoes. Cook for 3–5 minutes.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800"
              >
                5
              </span>

              <div>
                <h3 className="font-semibold">Combine</h3>

                <p className="mt-1 text-gray-600">
                  Add the cooked pasta and mix everything together.
                </p>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
};

export default Body;