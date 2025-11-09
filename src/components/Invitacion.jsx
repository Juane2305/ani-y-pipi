import { useState } from "react";
import cancion from "../assets/song.mp3";
import Countdown from "./Countdown";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DressCode from "./DressCode";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import MusicScreen from "./MusicScreen";
import { GalleryPraga } from "./GalleryPraga";
import LugaresPraga from "./LugaresPraga";

const Invitacion = () => {
  const targetDate = new Date("2026-01-24T21:00:00-03:00");

  const colorPrincipal = "#A27C5A"; 

  const [showValores, setShowValores] = useState(false);

  const [copied, setCopied] = useState({ alias: false, cbu: false });

  const handleCopy = (type, value) => {
    navigator.clipboard.writeText(value);
    setCopied((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setCopied((prev) => ({ ...prev, [type]: false }));
    }, 1500);
  };

  return (
    <div className="w-full relative font-modernaText overflow-hidden">
      <div className="absolute">
        <MusicScreen cancion={cancion} />
      </div>
      <div className="relative flex flex-col items-center justify-center h-screen w-full text-center bg-fondo-praga-mobile md:bg-fondo-praga bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Texto sobre la foto */}
        <div className="absolute top-30 md:top-10 z-10 flex flex-col items-center text-center w-full">
          <p className="text-lg md:text-xl uppercase tracking-widest text-white mb-3 font-montserrat">
            ¡Nos Casamos!
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 font-tangerine">
            Ani &amp; Pipi
          </h1>
        </div>

        {/* Foto */}
        <img
          src="https://res.cloudinary.com/dfschbyq2/image/upload/v1762705546/WhatsApp_Image_2025-11-06_at_3.54.31_PM_2_waqzqj.jpg"
          alt="Fondo nombres"
          className="absolute inset-0 w-full h-full object-contain opacity-90 md:opacity-50"
        />

        {/* Fecha debajo de la foto */}
        <div className="absolute bottom-40 md:bottom-10 z-10">
          <p className="text-xl italic md:text-2xl text-white font-montserrat tracking-wide">
            24 / 01 / 2026
          </p>
        </div>
      </div>
      <div>
        <section
          id="contador"
          className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 py-10 font-thin"
        >
          <Countdown
            containerClasses={
              "w-full flex flex-col justify-center items-center gap-y-5 font-montserrat"
            }
            targetDate={targetDate}
          />
        </section>

        <LugaresPraga
          linkCeremonia="https://maps.app.goo.gl/smV8o7JamjWN63787"
          nombreIglesia="Iglesia Redentor (Independencia 670)"
          horaIglesia="19:00hs"
          linkCivil=""
          linkFiesta="https://maps.app.goo.gl/QRFunmf9PxkNVRCD6"
          nombreSalon="SUM Multiespacio"
          horaFiesta="21:00hs"
          horaCivil="21:15hs"
          claseContainer="flex flex-col md:flex-row items-center justify-center gap-8 my-8 font-montserrat"
          claseTexto="text-gray-900"
        />
        <section className="mb-16">
          <GalleryPraga
            text="❤️"
            sectionClass="bg-white text-gray-700 font-montserrat"
            images={[
              {
                index: 1,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762705564/WhatsApp_Image_2025-11-06_at_3.54.32_PM_1_tcjlqz.jpg",
              },
              {
                index: 2,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762705559/WhatsApp_Image_2025-11-06_at_3.54.32_PM_uierv7.jpg",
              },
              {
                index: 3,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762705553/WhatsApp_Image_2025-11-06_at_3.54.31_PM_3_ojzemj.jpg",
              },
              {
                index: 4,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762706140/bf544d50-b731-4306-bf34-bb4cb25ac813.png",
              },
              {
                index: 5,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1762705538/WhatsApp_Image_2025-11-06_at_3.54.31_PM_btstpq.jpg",
              },
            ]}
          />
        </section>
        <div className="bg-[#A27C5A] text-center text-white relative font-montserrat">
          <GoogleCalendarButton
            background={{ backgroundColor: colorPrincipal }}
            titleCalendar="Boda de Ani y Pipi"
            fechaComienzo="20260124T210000"
            fechaFin="20260125T050000"
            salon="Tomasini 561, S2126 Fighiera, Santa Fe"
            imgClass="text-white"
            buttonClass="bg-white hover:bg-transparent text-gray-800 hover:text-white border-white"
          />
        </div>
        {/* Valores Tarjeta */}
        <div className="bg-white py-12 flex flex-col items-center font-montserrat">
          <h2 className="text-2xl md:text-3xl font-montserrat mb-4 text-gray-900 tracking-wide uppercase">
            Valor de la Tarjeta
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Consultá los valores y datos de pago
          </p>
          <button
            onClick={() => setShowValores(true)}
            className="bg-gray-900 text-white py-3 px-10 rounded-full text-lg shadow-md hover:bg-gray-800 transition duration-300"
          >
            Ver valores
          </button>
        </div>
        {/* <div className="relative">
          <DressCode dress_code="Elegante" />
        </div> */}
        <DatosBancarios
          texto="Si deseás hacernos un regalo te dejamos nuestros datos"
          claseContenedor=" text-white font-montserrat"
          claseBoton="border-2 border-blue-900 bg-white py-3 px-6 text-gray-800 rounded-full hover:bg-gray-100 hover:text-gray-800 transform transition-transform duration-300 ease-in-out"
          textSize="text-lg"
          background={{ backgroundColor: colorPrincipal }}
          styleBotonModal={{ backgroundColor: "white", borderColor: "white" }}
          claseBotonModal={{
            backgroundColor: colorPrincipal,
            borderColor: colorPrincipal,
          }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          cbu="4530000800012841310677"
          alias="Ana.pipi.26"
          banco="Naranja X"
          nombre="Ana Clara Paire"
          borderModal="border-blue-500"
          textColor="text-blue-500"
        />
        <section className="px-6 md:px-20 py-10 bg-white text-gray-800 font-montserrat text-center space-y-4">
          <p className="text-lg md:text-xl leading-relaxed">
            "El amor no se deleita en la maldad, sino que se regocija con la verdad"
          </p>
          <p className="italic text-gray-500">1 Corintios 13:6</p>
        </section>
        <Asistencia
          clase="py-10 bg-fondo-banner font-montserrat"
          claseButton="border-2 py-3 px-6 rounded-full border-gray-800 hover:border-gray-700 hover:bg-white hover:text-gray:800"
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSfiHa-RhAgpcy_azeil1X9nFd-4hUlV19Yi8tQ-51xAvxvmvw/viewform?usp=publish-editor"
        />
        <section className="px-6 md:px-20 py-10 bg-white text-gray-800 font-montserrat text-center space-y-4">
          <p className="text-lg md:text-xl leading-relaxed">
            ¡Gracias por venir!
          </p>
        </section>

        <Footer />
      </div>
      {showValores && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-gray-800 font-montserrat space-y-4 text-center relative">
            <h3 className="text-xl font-semibold">Valores de la tarjeta</h3>

            <p className="text-lg"><span className="font-medium">Adultos:</span> $65.000</p>
            <p className="text-lg"><span className="font-medium">Menores:</span> $33.000</p>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">Datos para transferir</h4>
              <p><span className="font-medium">Titular:</span> Ana Clara Paire</p>
              <p><span className="font-medium">Banco:</span> Naranja X</p>
              <p><span className="font-medium">Alias:</span> Ana.pipi.26</p>
              <p><span className="font-medium">CBU:</span> 4530000800012841310677</p>

              <div className="flex justify-center gap-3 mt-4">
                <button
                  className="bg-gray-800 text-white rounded-full text-sm transition-transform active:scale-95 px-3 py-2"
                  onClick={() => handleCopy("alias", "Ana.pipi.26")}
                >
                  {copied.alias ? "✔ Alias copiado" : "Copiar Alias"}
                </button>
                <button
                  className="bg-gray-800 text-white rounded-full text-sm transition-transform active:scale-95 px-3 py-2"
                  onClick={() => handleCopy("cbu", "4530000800012841310677")}
                >
                  {copied.cbu ? "✔ CBU copiado" : "Copiar CBU"}
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowValores(false)}
              className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invitacion;
