const Body = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 pt-4 pb-8 md:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* INGREDIENTS */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Ingredients
          </h2>

          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-3">
              <span>Pasta</span>
              <span>200 g</span>
            </li>

            <li className="flex justify-between border-b pb-3">
              <span>Chicken breast</span>
              <span>150 g</span>
            </li>

            <li className="flex justify-between border-b pb-3">
              <span>Onion</span>
              <span>1 medium</span>
            </li>

            <li className="flex justify-between border-b pb-3">
              <span>Garlic</span>
              <span>2 cloves</span>
            </li>

            <li className="flex justify-between border-b pb-3">
              <span>Cherry tomatoes</span>
              <span>100 g</span>
            </li>

            <li className="flex justify-between border-b pb-3">
              <span>Olive oil</span>
              <span>2 tbsp</span>
            </li>
          </ul>
        </section>

        {/* METHOD */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Method
          </h2>

          <ol className="space-y-6">
            {/* STEP 1 */}
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                1
              </span>

              <div>
                <h3 className="font-semibold">Cook the pasta</h3>

                <p className="mt-1 text-gray-600">
                  Cook the pasta according to the package instructions.
                </p>
              </div>
            </li>

            {/* STEP 2 */}
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
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

            {/* STEP 3 */}
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
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

            {/* STEP 4 */}
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                4
              </span>

              <div>
                <h3 className="font-semibold">Add vegetables</h3>

                <p className="mt-1 text-gray-600">
                  Add onion, garlic and cherry tomatoes. Cook for 3–5 minutes.
                </p>
              </div>
            </li>

            {/* STEP 5 */}
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
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