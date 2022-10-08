// import Main from './components/Main';
import { projects } from "../Content";

function Projects() {
  return (
    <div
      className="p-8 text-center flex flex-col justify-center items-center gap-10"
      id="projects"
    >
      <h1>Proyectos</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((e) => (
          <div
            key={e.title}
            className="card card-compact bg-gray-200 items-center border
                       md:w-1/3 md:card-normal"
          >
            <figure className="">
              <img src={e.img} alt="" />
            </figure>
            <div className="card-body">
              <h3 className="card-title justify-center">{e.title}</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum enim voluptates sunt odit qui commodi eos, cumque
                consequuntur esse est ipsum architecto at dicta et dignissimos
                sed placeat ad provident?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
