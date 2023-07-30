import profilePic from "../../assets/images/profile-pic.png";
import Button from "../Button";
import "./styles.css";

const AboutMe = () => {
  const handleLink = (link) => {
    window.open(link, "_blank");
  };
  const resumeLink = 'https://docs.google.com/document/d/1KE7MurC9rncoaHc9IY-HEVB47pS0Sbl_r1MdrOd4-pA/edit?usp=sharing';
  return (
    <section
      id="about-me"
      className="flex items-center justify-around m-auto mt-10 w-full bg-sky-950 p-5 shadow-xl"
    >
      <img
        src={profilePic}
        alt=""
        className="max-w-xs rounded-full shadow-yellow-500 shadow-2xl"
      />
      <div className="flex flex-col max-w-lg">
        <h1 className="text-sky-50 text-6xl mb-10 font-poppins">About Me</h1>
        <p className="text-sky-50 text-justify font-vollkorn text-xl">
          Hello! I am <span className="text-yellow-500 font-bold">Fellipe</span>, a 28-year-old lawyer from
          <span className="text-yellow-500 font-bold">Alagoinhas</span>, a small town in the state of <span className="text-yellow-500 font-bold">Bahia</span>, in <span className="text-yellow-500 font-bold">Brazil</span> who decided
          to transition into the web development field. Currently, I am enrolled
          in <span className="text-yellow-500 font-bold">Trybe</span> and will graduate as a full stack developer in <span className="text-yellow-500 font-bold">January 2024</span>.
          I am a determined, self-taught professional with a passion for
          continuous learning. I am excited to build a career in web development
          and create innovative technological solutions.
        </p>
        <div className="flex items-center justify-around mt-5">
          <Button btnContent="Know more" btnType="button" btnId="hire-btn" />
          <Button btnContent="Resume" btnType="button" btnId="resume-btn" onClick={() => handleLink(resumeLink)} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
