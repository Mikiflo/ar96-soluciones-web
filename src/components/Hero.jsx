function Hero() {
  return (
    <section className="bg-slate-100">

      <div className="max-w-7xl mx-auto px-8 min-h-[85vh] grid md:grid-cols-2 gap-16 items-center">

        <div>

          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Atención rápida y garantizada
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mt-5 leading-tight">

            Soluciones confiables para tu hogar y negocio

          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">

            Brindamos servicios profesionales de
            electricidad, gasfitería, pintura y cerrajería,
            con atención rápida, materiales de calidad y
            personal comprometido.

          </p>

          <button className="mt-10 bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-lg font-semibold shadow-lg">

            Solicitar cotización

          </button>

        </div>

        <div className="flex justify-center">

          <div className="w-full h-[500px] rounded-2xl bg-white shadow-xl flex items-center justify-center">

            <span className="text-gray-400 text-lg">

              Imagen Principal

            </span>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero