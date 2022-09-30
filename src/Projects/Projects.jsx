// import Main from './components/Main';
import Img_MedicApp from "./MedicApp.png";
import Img_HenryFood from "./HenryFood.png";
import Img_GranBuda from "./GranBuda.png";

function Projects() {
  return (
    <div
      className="p-8 text-center flex flex-col justify-center items-center gap-10"
      id="projects"
    >
      <h1>Proyectos</h1>
      <Project img={Img_MedicApp} title="Medic App" />
      <Project img={Img_HenryFood} title="Henry Food" />
      <Project img={Img_GranBuda} title="Gran Buda" />
    </div>
  );
}

export default Projects;

function Project({ img, title }) {
  return (
    <div
      className="card card-compact bg-gray-200 items-center border
                    sm:w-1/2"
    >
      <figure className="">
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}
