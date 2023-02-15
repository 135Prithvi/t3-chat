/* eslint-disable @next/next/no-html-link-for-pages */


function AccessDenied() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tl from-blue-300 to-cyan-200">
        <section className="bg-primary relative z-10 py-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[400px] text-center">
                  <h2 className="mb-2 text-[50px] font-bold leading-none  sm:text-[80px] md:text-[100px]">
                    403
                  </h2>
                  <h4 className="mb-3 text-[22px] font-semibold leading-tight ">
                    Oops! You are forbidden
                  </h4>
                  <p className="mb-8 text-lg ">
                    You must be logined to our messages
                  </p>
                  <a
                    href="/api/auth/signin"
                    className="hover:text-primary inline-block rounded-lg border border-gray-200 px-8 py-3 text-center text-base font-semibold transition hover:bg-gray-200"
                  >
                    Go To Login
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
            <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="flex h-full w-1/3">
              <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
              <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
            </div>
            <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AccessDenied;
