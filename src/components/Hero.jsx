import { CheckCircle } from "lucide-react";

function Hero() {
  return (
    
    <section
  id="inicio"
  className="bg-slate-100 min-h-[85vh] flex items-center"
>
  <div className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">

    {/* Texto */}

    <div>

      <span className="text-orange-500 font-semibold uppercase tracking-widest">
        Atención rápida
      </span>

      <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mt-4">

        Soluciones confiables para tu hogar y negocio

      </h1>

      <p className="mt-6 text-xl text-gray-600 leading-8">

        Servicios de electricidad, gasfitería, pintura y cerrajería
        realizados con responsabilidad y compromiso.

      </p>

      <div className="mt-10 space-y-4">

        <div className="flex items-center gap-3">

          <CheckCircle className="text-green-600" />

          <span>Electricidad</span>

        </div>

        <div className="flex items-center gap-3">

          <CheckCircle className="text-green-600" />

          <span>Gasfitería</span>

        </div>

        <div className="flex items-center gap-3">

          <CheckCircle className="text-green-600" />

          <span>Pintura</span>

        </div>

        <div className="flex items-center gap-3">

          <CheckCircle className="text-green-600" />

          <span>Cerrajería</span>

        </div>

      </div>

      <a
        href="#contacto"
        className="inline-block mt-12 bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
      >

        Solicitar cotización

      </a>

    </div>

    {/* Imagen */}

    <div className="flex justify-center">

      <div className="w-full max-w-lg h-[500px] rounded-3xl bg-white shadow-xl flex items-center justify-center text-gray-400 text-xl">

        Imagen principal

      </div>

    </div>

  </div>
</section>
    
  )
}

export default Hero