function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-blue-900">
            AR96
          </h1>

          <p className="text-xs tracking-widest text-gray-500 uppercase">
            Soluciones Generales
          </p>

        </div>

        <ul className="hidden md:flex gap-10 font-medium text-gray-700">

          <li>
            <a href="#inicio" className="hover:text-orange-500 transition">
              Inicio
            </a>
          </li>

          <li>
            <a href="#servicios" className="hover:text-orange-500 transition">
              Servicios
            </a>
          </li>

          <li>
            <a href="#nosotros" className="hover:text-orange-500 transition">
              Nosotros
            </a>
          </li>

          <li>
            <a href="#contacto" className="hover:text-orange-500 transition">
              Contacto
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar