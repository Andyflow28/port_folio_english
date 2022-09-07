import NavBar from "../components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#131313] h-screen">
      <NavBar />
      <div>
        <div className="flex flex-col justify-center w-full items-center sm:pt-80 pt-52 text-center">
          <div className="flex sm:mb-10 w-36 sm:w-48">
            <Image
              alt="react logo"
              width={"182px"}
              height="205px"
              src={"/img/atomic.png"}
            />
          </div>
          <h1 className="text-white font-semibold sm:text-6xl text-4xl">
            FRONTED DEVELOPER
          </h1>
        </div>
      </div>
    </div>
  );
}
