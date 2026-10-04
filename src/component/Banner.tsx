 
import {
 
  LuClock3,
  LuUsers,
 
} from "react-icons/lu";

function Banner() {
 

  return (
    <main>
      <section className="bg-linear-to-r from-[#183D2B] to-[#245438] text-white mb-20">

        {/* HERO CONTENT */}
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-8 md:px-12 md:pb-12 md:pt-10">
          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Chicken Pasta
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-100 md:text-lg">
            A simple and delicious chicken pasta recipe with chicken, perfect
            for a quick and healthy meal.
          </p>

   
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
  
            <div className="flex items-center gap-2">
              <LuClock3 aria-hidden="true" className="text-xl" />

              <span>30 minutes</span>
            </div>

 
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