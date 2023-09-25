import { Button } from "./ui/Button.jsx";

export function HeroBanner() {
  return (
    <>
      <div className=" hidden md:absolute md:right-0 md:top-0 md:-z-[1] md:block md:w-[322px] xl:right-[165px] xl:w-[445px]">
        <picture>
          <source
            srcSet="../assets/images/profil/image-profile-tablet.webp"
            type="image/webp"
            media="(min-width: 768px) and (max-width: 1024px)"
          />
          <source
            srcSet="../assets/images/profil/image-profile-tablet.png"
            type="image/png"
            media="(min-width: 768px) and (max-width: 1024px)"
          />
          <source
            srcSet="../assets/images/profil/image-profile-desktop.webp"
            type="image/webp"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="../assets/images/profil/image-profile-desktop.png"
            type="image/png"
            media="(min-width: 1024px)"
          />
          <img
            src="../assets/images/profil/image-profile-tablet.png"
            alt="Photo de profil d'adamkeyes"
            loading="lazy"
          />
        </picture>
      </div>
      <section className="md:mt-[90px]">
        <div className="absolute left-1/2 top-0 w-[174px] translate-x-image md:hidden">
          <picture>
            <source
              srcSet="../assets/images/profil/image-profile-mobile.png"
              type="image/png"
            />
            <img
              src="../assets/images/profil/image-profile-mobile.webp"
              alt="Photo de profil d'adamkeyes"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="mt-[331px] flex flex-col justify-center gap-6 px-4 text-white md:mt-0 md:w-[65%] md:gap-0 md:pl-8 xl:w-[64%] xl:pl-[165px]">
          <h1 className="text-center text-[2.5rem] font-bold leading-10 tracking-h1 md:text-left md:text-7xl md:tracking-h1Tablet xl:text-[5.5rem] xl:tracking-h1Desktop">
            <span className="md:block md:w-[247px] xl:inline-block xl:w-[286px]">
              Nice to
            </span>{" "}
            meet you! I’m{" "}
            <span className="border-b-4 border-b-tertiary md:border-b-[6px]">
              Adam Keyes
            </span>
            .
          </h1>
          <p className="leadind-[26px] xl:w-[445px]xl:mt-[43px] text-center font-medium text-grey md:mt-[66px] md:text-left md:text-[18px] md:leading-[28px]">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <Button
            title="contact me"
            link="#"
            style="mx-auto md:mx-0 md:mt-[34px] xl:mt-[66px]"
          />
        </div>
      </section>
      <div className="absolute top-[124px] -z-[1] translate-x-[-56%] md:top-[86px] md:-translate-x-1/2 xl:top-[100px] xl:-translate-x-[20%]">
        <img
          src="../assets/images/pattern/pattern-rings.svg"
          alt="Pattern rings"
        />
      </div>
      <div className="absolute right-[-76px] top-[254px] -z-[1] md:right-[-8%] md:top-[471px] lg:top-[471px] xl:right-[545px] xl:top-[521px]">
        <img
          src="../assets/images/pattern/pattern-circle.svg"
          alt="Pattern Circle"
        />
      </div>
    </>
  );
}
