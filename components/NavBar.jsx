import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  const router = useRouter();
  const close = "hidden sm:block sm:w-4/6";
  const open = "sm:block sm:w-4/6";
  const [menu, setMenu] = useState(close);
  return (
    <div className={"sm:flex sm:justify-center sm:py-8 bg-[#131313] " + styles.menu_fixed}>
      <div className={"bg-[#0A0A0A] sm:flex sm:justify-between sm:items-center sm:w-[90%] sm:rounded-3xl shadow-10xl shadow-gray-800 "}>
        <div className="flex justify-between cursor-pointer">
          <div className="flex mx-5 my-3 sm:mx-8">
            <Image
              alt="react logo"
              width={"48px"}
              height="48px"
              src={"/img/atomic.png"}
              onClick={() => router.push('/')}
            />
          </div>
          <div
            className="flex mx-5 my-3 cursor-pointer sm:hidden"
            onClick={() => {
              if (menu === open) {
                setMenu(close);
              } else {
                setMenu(open);
              }
            }}
          >
            <Image
              alt="menu logo"
              width={"48px"}
              height="48px"
              src={"/img/nav.png"}
            />
          </div>
        </div>
        <div className={menu}>
          <div className="text-white flex flex-col items-center sm:flex-row sm:items-center sm:justify-between sm:w-[44rem]">
            <Link href={"/"}>
              <a className={"my-2 font-medium sm:mx-4"}>Home</a>
            </Link>
            <Link href={"/Projects"}>
              <a className="my-2 font-medium sm:mx-4">Projects</a>
            </Link>
            <Link href={"/About"}>
              <a className="my-2 font-medium sm:mx-4">About</a>
            </Link>

            <div className="flex mt-2 mb-5 sm:my-5 sm:ml-80">
              <Link href={"https://www.linkedin.com/in/andresjfloresg/"}>
                <a target="_blank" className="flex mx-3 w-8">
                  <Image
                    alt="menu logo"
                    width={"48px"}
                    height="48px"
                    src={"/img/linkedin.png"}
                  />
                </a>
              </Link>

              <Link href={"https://github.com/Andyflow28"}>
                <a className="flex mx-3 w-8" target="_blank">
                  <Image
                    alt="menu logo"
                    width={"48px"}
                    height="48px"
                    src={"/img/github.png"}
                  />
                </a>
              </Link>

              <Link href={"https://twitter.com/joseguerreroaf"}>
                <a className="flex mx-3 w-8" target="_blank">
                  <Image
                    alt="menu logo"
                    width={"48px"}
                    height="48px"
                    src={"/img/twitter.png"}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
