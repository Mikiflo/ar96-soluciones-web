import {
  Zap,
  Wrench,
  Paintbrush,
  KeyRound
} from "lucide-react";

function Services() {

  const services = [
    {
      icon: <Zap size={42} />,
      title: "Electricidad",
      description:
        "Instalaciones eléctricas, tomacorrientes, luminarias, tableros y mantenimiento."
    },
    {
      icon: <Wrench size={42} />,
      title: "Gasfitería",
      description:
        "Reparación de fugas, instalaciones sanitarias, griferías y tuberías."
    },
    {
      icon: <Paintbrush size={42} />,
      title: "Pintura",
      description:
        "Pintado de interiores y exteriores con acabados profesionales."
    },
    {
      icon: <KeyRound size={42} />,
      title: "Cerrajería",
      description:
        "Cambio de cerraduras, aperturas y mantenimiento de puertas."
    }
  ];

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-900">

          Nuestros Servicios

        </h2>

        <p className="text-center text-gray-600 mt-5 max-w-2xl mx-auto">

          Soluciones integrales para hogares, oficinas y pequeños negocios.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition"
            >

              <div className="text-orange-500">

                {service.icon}

              </div>

              <h3 className="mt-6 text-2xl font-semibold text-blue-900">

                {service.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {service.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Services;