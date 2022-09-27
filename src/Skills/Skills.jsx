//import ProfileImg from "./Profile.jpeg";

function Skills() {
  return (
    <div className="text-white p-8 bg-secondary text-center flex flex-col justify-center items-center gap-10">
      <h1>Habilidades</h1>
      <div className="flex gap-2">
        <Frame
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
          title="HTML 5"
        />
        <Frame
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/250px-CSS3_logo_and_wordmark.svg.png"
          title="CSS 3"
        />
        <Frame
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          title="JavaScript"
        />
        <Frame
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
          title="React"
        />
      </div>
    </div>
  );
}

export default Skills;

function Frame({ src, title }) {
  return (
    <div className="flex flex-col items-center w-12">
      <img src={src} alt="HTML5" className="h-12 m-0 object-contain" />
      <p className="text-xs m-0 mt-2">{title}</p>
    </div>
  );
}
