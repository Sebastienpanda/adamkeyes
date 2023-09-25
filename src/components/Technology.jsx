export function Technology() {
  const technology = [
    {
      id: 1,
      name: "Html",
      experience: "4",
    },
    {
      id: 2,
      name: "Css",
      experience: "4",
    },
    {
      id: 3,
      name: "Javascript",
      experience: "4",
    },
    {
      id: 4,
      name: "Accessibility",
      experience: "4",
    },
    {
      id: 5,
      name: "React",
      experience: "3",
    },
    {
      id: 6,
      name: "Sass",
      experience: "3",
    },
  ];

  return (
    <>
      <section className="relative mx-4 mt-20 border-y-[1px] border-y-white md:mx-8 md:border-y-0 md:border-t-[1px] md:border-t-white xl:mx-[165px] xl:mt-[219px]">
        <div className="flex flex-col items-center gap-6 py-10 md:flex-row md:flex-wrap md:gap-x-[7px] md:gap-y-[52px] md:py-0 md:pt-[52px] xl:gap-x-[30px] xl:gap-y-[58px] xl:pt-[72px]">
          {technology.map((element) => {
            return (
              <div
                className="flex flex-col text-center text-white md:w-[49%] md:gap-[14px] md:text-left xl:w-[31%]"
                key={element.id}
              >
                <h2 className="tracking-technologyH2 md:tracking-technologyH2Tablet text-[2rem] font-bold uppercase leading-10 md:text-left md:text-5xl">
                  {element.name}
                </h2>
                <p className="leading-technologyP md:leading-technologyPTablet font-medium text-grey md:text-[18px]">
                  {element.experience} Years Experience
                </p>
              </div>
            );
          })}
        </div>
        <div className="absolute top-[539px] translate-x-[189px] md:top-[386px] md:translate-x-[535px] xl:top-[231px] xl:translate-x-[1000px]">
          <img
            src="../assets/images/pattern/pattern-rings.svg"
            alt="Pattern rings"
          />
        </div>
      </section>
    </>
  );
}
