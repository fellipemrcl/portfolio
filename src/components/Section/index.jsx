import sectionImage from "../../assets/images/section-image.svg";
import Button from "../Button";

const Section = () => {
  const redirectToProjects = () => {
    window.location.href = "#projects";
  };
  
  return (
    <section className="flex items-center justify-center">
      <div className="flex items-center justify-around max-w-screen-lg">
        <div>
          <h1 className="text-sky-50 text-7xl font-poppins mb-5">
            Hi, I am{" "}
            <span className="text-yellow-500">Fellipe Marcel Maia Silva</span>,
            a Full Stack Web Developer.
          </h1>
          <Button
            onClick={redirectToProjects}
            btnContent="See my projects"
            btnType="button"
          />
        </div>
        <img className="max-w-xl" src={sectionImage} alt="" />
      </div>
    </section>
  );
};

export default Section;
