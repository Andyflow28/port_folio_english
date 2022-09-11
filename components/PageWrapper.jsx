import Head from "next/head";
import NavBar from "./NavBar";
import favicon from "../public/favicon.ico";

const PageWrapper = ({children}, props) => {
  return (
    <div className="bg-[#131313]">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>

      <main>
        <NavBar />
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
