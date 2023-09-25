import { Button } from "./ui/Button.jsx";

export function Projects() {
  const projects = [
    {
      thumbnail: "../assets/images/projects/thumbnail-project-1-small.webp",
      title: "DESIGN PORTFOLIO",
      tags: ["html", "css"],
    },
    {
      thumbnail: "../assets/images/projects/thumbnail-project-2-small.webp",
      title: "E-LEARNING LANDING PAGE",
      tags: ["html", "css"],
    },
    {
      thumbnail: "../assets/images/projects/thumbnail-project-3-small.webp",
      title: "E-LEARNING LANDING PAGE",
      tags: ["html", "css"],
    },
    {
      thumbnail: "../assets/images/projects/thumbnail-project-4-small.webp",
      title: "TODO WEB APP",
      tags: ["html", "css", "javascript"],
    },
    {
      thumbnail: "../assets/images/projects/thumbnail-project-5-small.webp",
      title: "MEMORY GAME",
      tags: ["html", "css", "javascript"],
    },
    {
      thumbnail: "../assets/images/projects/thumbnail-project-6-small.webp",
      title: "ART GALLERY SHOWCASE",
      tags: ["html", "css", "javascript"],
    },
  ];

  return (
    <>
      <section className="mt-20 px-4 md:mt-[100px] md:px-8 xl:px-[165px]">
        <div className="flex items-center justify-between text-white">
          <h2 className="text-[2.5rem] font-bold leading-10 tracking-h1 md:text-[4.5rem] md:leading-[72px] md:tracking-h1Tablet xl:text-[5.5rem]">
            Projects
          </h2>
          <Button title="contact me" link="#" style="mx-0" />
        </div>

        <div className="mt-10 flex flex-col gap-10 md:mt-[60px] md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-[60px] xl:mt-20">
          {projects.map((project, index) => {
            return (
              <figure key={index} className="cursor-pointer md:w-[48%]">
                <div className="cardProject relative">
                  <img src={project.thumbnail} alt={project.title} />
                  <div className="btnProject hidden">
                    <Button title="View Project" link="#" style="w-[140px]" />
                    <Button title="View Code" link="#" style="w-[104px]" />
                  </div>
                </div>

                <figcaption className="text-white">
                  <h3 className="pt-5 text-2xl font-bold">{project.title}</h3>
                  <div className="leading-technologyPTablet flex gap-[18px] pt-[7px] text-[1.125rem] font-medium uppercase">
                    {project.tags.map((tag, index) => {
                      return <span key={index}>{tag}</span>;
                    })}
                  </div>
                  <div className="flex gap-[30px] pt-5 xl:hidden">
                    <Button title="View Project" link="#" style="w-[140px]" />
                    <Button title="View Code" link="#" style="w-[104px]" />
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </>
  );
}
