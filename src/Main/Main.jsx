import ProfileImg from "./Profile.jfif";

function Main() {
  return (
    <div
      className="p-8 h-[calc(100vh-64px)] flex flex-col-reverse justify-center items-center gap-10 
                 sm:flex-row sm:gap-40"
                 id="main"
    >
      <div className="flex flex-col items-center sm:items-start gap-8">
        <h1 className="text-center sm:text-start">
          Hola, mi nombre es Gabriel Revelo.
          <br />
          Soy Desarrollador Web Full Stack.
        </h1>
        <button className="btn btn-primary">Contactame</button>
      </div>
      <img src={ProfileImg} alt="" className="rounded-full h-60" />
    </div>
  );
}

export default Main;
