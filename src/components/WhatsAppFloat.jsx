import { FaWhatsapp } from "react-icons/fa";
import { contact } from "../data/site";

export default function WhatsAppFloat() {
  if (!contact.whatsappLink) return null;

  return (
    <a
      href={contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Bendalo on WhatsApp"
    >
      <span className="whatsapp-float-rings" aria-hidden="true">
        <span className="whatsapp-ring" />
        <span className="whatsapp-ring whatsapp-ring-2" />
      </span>

      <span className="whatsapp-float-icon">
        <FaWhatsapp />
      </span>

      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}