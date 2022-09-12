import Image from "next/image";
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <Head>
        <title>Inicio</title>
      </Head>
      <div className="h-screen">
        <div>
          <div className="flex flex-col justify-center w-full items-center sm:pt-80 pt-52 text-center">
            <h2 className="text-white font-semibold sm:text-5xl text-4xl mb-5">¡Hola!, Soy Andres Flores</h2>
            <div className="flex sm:mb-10 w-36 sm:w-80 shadow-2xl shadow-gray-500 rounded-full">
              <Image
                alt="react logo"
                width={"433px"}
                height="433px"
                src={"/index.png"}
              />
            </div>
            <h1 className="text-white font-semibold sm:text-6xl text-4xl">
              FRONTEND DEVELOPER
            </h1>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
