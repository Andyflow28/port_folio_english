import PageWrapper from "../components/PageWrapper";
import Image from "next/image";
import styles from "../styles/Proyectos.module.css";
import Link from "next/link";
import Head from "next/head";

const Proyectos = () => {
  return (
    <PageWrapper title="Proyectos">
      <Head>
        <title>Proyectos</title>
      </Head>
      <div className="bg-[#131313] h-screen pt-48 flex justify-around">
        <Link href={"https://tropicalwhy.vercel.app/"}>
          <a
            target="_blank"
            className="w-5/12 bg-[#0A0A0A] h-[25rem] justify-center items-center flex text-4xl font-extrabold rounded-xl bg-center hover:shadow-2xl hover:shadow-gray-600 transition duration-300"
          >
            <div className="w-12/12 h-[25rem] flex">
              <Image
                alt="tropical"
                width={"800px"}
                height={"800px"}
                src={"/img/tropi.png"}
                className={"rounded-xl " + styles.op}
              />
            </div>
            <p className={"text-white absolute"}>Tropical Why</p>
          </a>
        </Link>
        <div className="w-5/12 bg-[#0A0A0A] h-[25rem]"></div>
      </div>
    </PageWrapper>
  );
};

export default Proyectos;
