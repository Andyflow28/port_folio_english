import PageWrapper from "../components/PageWrapper";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Inicio</title>
      </Head>
      <div className="bg-[#131313] h-screen pt-48 flex justify-around">
        <div className="bg-[#0A0A0A] w-6/12 text-white h-[45rem] rounded-3xl shadow-2xl shadow-gray-800">
          <div className="px-8 py-6 flex flex-col">
            <h2 className="mb-5 text-4xl font-semibold">Sobre mi</h2>
            <p className="mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <p className="mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. stic words etc.</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
          </div>
        </div>
        <div className="flex w-5/12 h-[45rem] rounded-3xl shadow-2xl shadow-gray-800">
          <Image
            alt="me"
            width={"2571px"}
            height="3865px"
            src={"/section.jpg"}
            className="rounded-3xl"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
