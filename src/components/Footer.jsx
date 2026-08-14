import {
  Phone,
  Mail,
  MapPin,
  Clock3
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white">

      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>

          <h2 className="text-3xl font-bold">
            AR96
          </h2>

          <p className="uppercase tracking-widest text-sm text-gray-300">
            Soluciones Generales
          </p>

          <p className="mt-6 text-gray-300 leading-7">
            Servicios de electricidad, gasfitería,
            pintura y cerrajería para hogares,
            oficinas y pequeños negocios.
          </p>

        </div>

        <div>

          <h3 className="font-semibold text-xl mb-5">
            Contacto
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Phone size={20} />
              <span>+51 924 220 169</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} />
              <span>contacto@ar96soluciones.com</span>
            </div>

          </div>

        </div>

        <div>

          <h3 id="contacto" className="font-semibold text-xl mb-5">
            Atención
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Clock3 size={20} />
              <span>Disponible 24/7 previa coordinación.</span>
            </div>

          </div>

        </div>

        <div>

          <h3 className="font-semibold text-xl mb-5">
            Cobertura
          </h3>

          <div className="flex items-center gap-3">

            <MapPin size={20} />

            <span>
              Lima Metropolitana
            </span>

          </div>

        </div>

      </div>

      <div className="border-t border-blue-900">

        <div className="max-w-7xl mx-auto px-8 py-6 text-center text-gray-400 text-sm">

          © {new Date().getFullYear()} AR96 Soluciones Generales. Todos los derechos reservados.

        </div>

      </div>

    </footer>
  );
}

export default Footer;