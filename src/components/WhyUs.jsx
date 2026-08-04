import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Smile
} from "lucide-react";

function WhyUs() {

  const benefits = [
    {
      icon: <Clock3 size={48} />,
      title: "Atención rápida",
      text: "Respondemos oportunamente para atender tus necesidades."
    },
    {
      icon: <ShieldCheck size={48} />,
      title: "Trabajo de calidad",
      text: "Realizamos cada servicio con responsabilidad y compromiso."
    },
    {
      icon: <BadgeCheck size={48} />,
      title: "Personal calificado",
      text: "Experiencia en instalaciones, mantenimiento y reparaciones."
    },
    {
      icon: <Smile size={48} />,
      title: "Atención personalizada",
      text: "Buscamos la mejor solución para cada cliente."
    }
  ];

  return (

    <section className="bg-slate-100 py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-900">

          ¿Por qué elegirnos?

        </h2>

        <p className="text-center text-gray-600 mt-5 max-w-2xl mx-auto">

          Nos enfocamos en ofrecer un servicio confiable, puntual y de calidad.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {benefits.map((item) => (

            <div
              key={item.title}
              className="text-center"
            >

              <div className="flex justify-center text-orange-500">

                {item.icon}

              </div>

              <h3 className="mt-5 text-xl font-semibold text-blue-900">

                {item.title}

              </h3>

              <p className="mt-3 text-gray-600 leading-7">

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default WhyUs;