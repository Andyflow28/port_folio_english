import PageWrapper from "../components/PageWrapper";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <PageWrapper>
      <Head>
        <title>About me</title>
      </Head>
      <div className="bg-[#131313] h-screen sm:pt-48 flex sm:justify-around sm:flex-row flex-col pt-28">
        <div className="sm:bg-[#0A0A0A] bg-[#131313] sm:w-6/12 text-white sm:h-[45rem] sm:rounded-3xl shadow-2xl shadow-gray-800">
          <div className="px-8 py-6 flex flex-col">
            <h2 className="mb-5 text-4xl font-semibold">
              Andres Jose Flores Guerrero
            </h2>
            <div className="sm:mt-36">
              <p className="mb-5 text-xl">
                I am a Web Developer, lover of Physical Sciences and technology,
                and I am willing to accept new challenges contributing from the
                Front-End to the development of Web applications and UI.
              </p>
              <p className="mb-5 text-xl">
                I love programming with NextJS, making backend services with
                fast NodeJS to build dynamic applications and functional, using
                MySQL or MongoDB as databases relations.
              </p>
              <p className="text-xl">
                My interest has always revolved around the industry of software.
                I did a bootcamp that changed my life and I started program. And
                the rest is history.
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
