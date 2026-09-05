import { MapPin } from "lucide-react";

function Coverage() {
  return (
    <section className="bg-white pt-6 pb-12">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <div className="flex justify-center text-orange-500">
          <MapPin size={42} />
        </div>

        <h2 className="mt-3 text-3xl font-bold text-blue-900">
          Atendemos en Lima Metropolitana
        </h2>

        <p className="mt-4 text-gray-600 leading-7 max-w-2xl mx-auto">
          Brindamos atención a domicilio para hogares, oficinas y negocios
          en diferentes zonas de Lima Metropolitana.
        </p>

      </div>
    </section>
  );
}

export default Coverage;