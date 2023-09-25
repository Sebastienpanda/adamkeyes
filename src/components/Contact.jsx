import { Button } from "./ui/Button.jsx";

export function Contact() {
  return (
    <>
      <section className="bg-darkGrey relative mt-20 h-[662px] md:h-[703px] xl:h-[503px]">
        <div className="flex flex-col items-center px-4 md:px-[162px] xl:flex-row xl:items-start xl:gap-[210px] xl:pt-20">
          <div className="flex flex-col gap-5 xl:gap-[36px]">
            <h2 className="pt-[60px] text-center text-[2.5rem] font-bold leading-10 tracking-h1 text-white md:text-[4.5rem] md:leading-[72px] md:tracking-h1Tablet xl:pt-0 xl:text-left xl:text-[5.5rem] xl:leading-[88px] xl:tracking-[-2.5px]">
              Contact
            </h2>
            <p className="leading-technologyP text-center font-medium text-grey md:leading-[28px] md:text-[1.1.125rem] xl:text-left">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <form className="flex w-full flex-col gap-8 pt-[50px] text-grey md:pt-[48px] xl:pt-0">
            <div>
              <input
                className="placeholder:leading-technologyP placeholder:tracking-label h-[43px] w-full border-b-[1px] border-b-white bg-transparent placeholder:mb-[17px] placeholder:pl-6 placeholder:font-medium placeholder:uppercase placeholder:text-white/50"
                type="text"
                name="name"
                id="name"
                placeholder="name"
              />
            </div>
            <div>
              <input
                className="placeholder:leading-technologyP placeholder:tracking-label h-[43px] w-full border-b-[1px] border-b-white bg-transparent placeholder:pl-6 placeholder:font-medium placeholder:uppercase placeholder:text-white/50"
                type="email"
                name="email"
                id="email"
                placeholder="email"
              />
            </div>
            <div>
              <textarea
                className="placeholder:leading-technologyP placeholder:tracking-label h-[107px] w-full resize-none border-b-[1px] border-b-white bg-transparent uppercase placeholder:pl-6 placeholder:font-medium placeholder:text-white/50"
                name="message"
                id="message"
                placeholder="message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button
                title="send message"
                link="#"
                style="text-white w-[144px]"
              />
            </div>
          </form>
        </div>
      </section>
      <div className="absolute bottom-[200px] z-[1] translate-x-[-50%] md:bottom-[160px] md:translate-x-[-70%] xl:bottom-[295px] xl:-translate-x-[40%]">
        <img
          src="../assets/images/pattern/pattern-rings.svg"
          alt="Pattern rings"
        />
      </div>
    </>
  );
}
