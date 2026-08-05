import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phone = "51999999999";

  const message =
    "Hola, deseo solicitar información sobre sus servicios.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-xl transition duration-300 z-50"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;