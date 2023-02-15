/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

const Layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="relative overflow-hidden">
      <Header />
      {/* <section className="absolute top-14 left-0 h-full w-full max-w-[10rem] border-  border-black bg-gray-100 sm:block hidden">
        <div className="flex justify-center p-3">

        <h1 className="text-center text-2xl">Items</h1>
        </div>
      </section> */}
      {children}
    </section>
  );
};
export default Layout;
const Header: React.FC = () => {
  return (
    <nav className="absolute w-full">
      <div className=" flex w-full flex-grow flex-wrap justify-center bg-white p-3  font-sans shadow-2xl sm:sticky sm:top-0 sm:z-50 sm:justify-center lg:justify-end">
        <div className=" mx-5 hidden flex-grow items-center justify-start sm:flex">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-400 "
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="344.564 330.278 111.737 91.218"
              width="53.87"
              height="43.61"
            >
              <defs>
                <linearGradient
                  id="logo_svg__b"
                  gradientUnits="userSpaceOnUse"
                  x1="420.97"
                  y1="331.28"
                  x2="420.97"
                  y2="418.5"
                >
                  <stop offset="0%"></stop>
                  <stop offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  id="logo_svg__d"
                  gradientUnits="userSpaceOnUse"
                  x1="377.89"
                  y1="331.28"
                  x2="377.89"
                  y2="418.5"
                >
                  <stop offset="0%"></stop>
                  <stop offset="100%"></stop>
                </linearGradient>
                <path
                  d="M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z"
                  id="logo_svg__a"
                ></path>
                <path
                  d="M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z"
                  id="logo_svg__c"
                ></path>
              </defs>
              <use xlinkHref="#logo_svg__a" fill="url(#logo_svg__b)"></use>
              <use xlinkHref="#logo_svg__c" fill="url(#logo_svg__d)"></use>
            </svg>
          </a>
        </div>
        <ul className="flex flex-row space-x-7 ">
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-110 hover:text-blue-300 text-xs sm:text-base"
          >
            <>Blog</>
          </Link>
          <Link
            href="/profile"
        
            className="transition-transform duration-300 hover:scale-110 hover:text-blue-300 text-xs sm:text-base"
          >
            <>Personal</>
          </Link>
          <Link
            href="/about"
            className="transition-transform duration-300 hover:scale-110 hover:text-blue-300 text-xs sm:text-base"
          >
            <>About</>
          </Link>
          <Link
            href="https://github.com/135Prithvi"
            target="_blank"
            className="transition-transform duration-300 hover:scale-110 hover:text-blue-300 text-xs sm:text-base"
          >
            <>Github</>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
