import { skillsSection } from "../Content";

function Skills() {
  return (
    <div
      className="text-white p-8 bg-secondary text-center flex flex-col justify-center items-center gap-10"
      id="skills"
    >
      {skillsSection.title ? <h1>{skillsSection.title}</h1> : null}
      {skillsSection.content ? <p>{skillsSection.content}</p> : null}
      {skillsSection.technologies ? (
        <div className="flex gap-2">
          {skillsSection.technologies.map((e) => (
            <div className="flex flex-col items-center w-12" key={e.name}>
              <img
                src={e.icon}
                alt="HTML5"
                className="h-12 m-0 object-contain"
              />
              <p className="text-xs m-0 mt-2">{e.name}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Skills;
