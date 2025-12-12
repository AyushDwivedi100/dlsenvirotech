import indiaMartLogo from "@assets/indiamart-logo.png";
import whatsappLogo from "@assets/whatsapp-logo.png";

export default function FloatingContactWidget() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button with Ripple Effect */}
      <a
        href="https://wa.me/919568572005?text=Hello,%20I%20am%20interested%20in%20your%20water%20treatment%20solutions.%20Please%20provide%20more%20information."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center h-14 w-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        data-testid="link-whatsapp-widget"
        aria-label="Chat with DLS Envirotech on WhatsApp for instant inquiry about water treatment and environmental solutions"
      >
        {/* Ripple Effects */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-[ripple_1.5s_ease-out_infinite]"></span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-[ripple_1.5s_ease-out_0.5s_infinite]"></span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-[ripple_1.5s_ease-out_1s_infinite]"></span>

        <img
          src={whatsappLogo}
          alt="WhatsApp messenger icon"
          className="h-7 w-7 object-contain relative z-10"
          aria-hidden="true"
        />
        <span className="absolute left-16 bg-[#25D366] text-white px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none z-10">
          WhatsApp
        </span>
      </a>

      {/* IndiaMART Button with Ripple Effect */}
      <a
        href="https://www.indiamart.com/dlsenvirotechcorporation/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center h-14 w-14 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        data-testid="link-indiamart-widget"
        aria-label="View DLS Envirotech profile on IndiaMART marketplace for product catalogs, reviews, and business inquiries"
      >
        {/* Ripple Effects */}
        <span className="absolute inset-0 rounded-full bg-[#E97D27] opacity-75 animate-[ripple_1.5s_ease-out_infinite]"></span>
        <span className="absolute inset-0 rounded-full bg-[#E97D27] opacity-75 animate-[ripple_1.5s_ease-out_0.5s_infinite]"></span>
        <span className="absolute inset-0 rounded-full bg-[#E97D27] opacity-75 animate-[ripple_1.5s_ease-out_1s_infinite]"></span>

        <img
          src={indiaMartLogo}
          alt="IndiaMART marketplace logo"
          className="h-12 w-12 object-contain relative z-10"
          aria-hidden="true"
        />
        <span className="absolute left-16 bg-[#E97D27] text-white px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none z-10">
          IndiaMART
        </span>
      </a>

      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.75;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
