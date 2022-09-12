import PageWrapper from "../components/PageWrapper";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Inicio</title>
      </Head>
      <div className="bg-[#131313] h-screen sm:pt-48 flex sm:justify-around sm:flex-row flex-col pt-28">
        <div className="sm:bg-[#0A0A0A] bg-[#131313] sm:w-6/12 text-white sm:h-[45rem] sm:rounded-3xl shadow-2xl shadow-gray-800">
          <div className="px-8 py-6 flex flex-col">
            <h2 className="mb-5 text-4xl font-semibold">
              Andres Jose Flores Guerrero
            </h2>
            <div className="sm:mt-36">
              <p className="mb-5 text-xl">
                Soy un Web Developer, amante de las Ciencias Físicas y de la
                tecnología, y estoy dispuesto aceptar nuevos retos contribuyendo
                desde el Front-End al desarrollo de aplicaciones Web y UI.
              </p>
              <p className="mb-5 text-xl">
                Me encanta programar con NextJS, haciendo servicios de backend
                con NodeJS rápidos para generar aplicaciones dinámicas y
                funcionales, usando a MySQL o MongoDB como bases de datos
                relaciones.
              </p>
              <p className="text-xl">
                Mi interés siempre ha girado al rededor de la industria de
                software. Realicé un bootcamp que me cambió la vida y empecé a
                programar. Y el resto es historia.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:w-5/12 sm:h-[45rem] sm:rounded-3xl shadow-2xl shadow-gray-800 hidden">
          <Image
            alt="me"
            width={"772px"}
            height="1160px"
            src={"/about.jpg"}
            className="sm:rounded-3xl"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
