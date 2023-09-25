export function Footer() {
  return (
    <>
      <footer className="bg-darkGrey pb-8 md:relative md:z-[1]  md:px-6 md:pt-[30px] lg:pt-10 xl:px-[170px]">
        <div className="flex w-full flex-col items-center gap-5 border-t-[1px]  border-t-white pt-[39px] md:flex-row md:justify-between md:gap-0 md:pb-[92px] ">
          <span className="text-h1 font-bold leading-8 tracking-mobile text-white md:text-[2rem]  md:tracking-tablet">
            adamkeyes
          </span>
          <nav>
            <ul className="flex gap-[25.6px] md:gap-8">
              <li>
                <a href="#" className="block h-5 w-5 md:h-6 md:w-6">
                  <img
                    src="../assets/images/icons/icon-github.svg"
                    alt="Github"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="block h-5 w-5 md:h-6 md:w-6">
                  <img
                    src="../assets/images/icons/icon-frontend-mentor.svg"
                    alt="Frontend Mentor"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="block h-5 w-5 md:h-6 md:w-6">
                  <img
                    src="../assets/images/icons/icon-linkedin.svg"
                    alt="Linkedin"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="block h-5 w-5 md:h-6 md:w-6">
                  <img
                    src="../assets/images/icons/icon-twitter.svg"
                    alt="Twitter"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
