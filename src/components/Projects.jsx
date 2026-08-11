import trabajo1 from "../assets/trabajo1.jpg";
import trabajo2 from "../assets/trabajo2.jpg";
import trabajo3 from "../assets/trabajo3.jpg";

function Projects() {
  const projects = [
      {
    image: trabajo1,
    title: "Instalación eléctrica",
    description: "Instalación de luminarias en oficina.",
  },
  {
    image: trabajo2,
    title: "Mantenimiento eléctrico",
    description: "Trabajos de mantenimiento en ambiente comercial.",
  },
  {
    image: trabajo3,
    title: "Instalación de iluminación",
    description: "Montaje y conexión de luminarias.",
  },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-900">

          Algunos de nuestros trabajos

        </h2>

        <p className="text-center text-gray-600 mt-5 max-w-2xl mx-auto">

          Cada proyecto refleja nuestro compromiso con la calidad y la atención al detalle.

        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {projects.map((project) => (

            <div
              key={project.title}
              className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover object-center"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-blue-900">

                  {project.title}

                </h3>

                <p className="mt-3 text-gray-600">

                  {project.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;