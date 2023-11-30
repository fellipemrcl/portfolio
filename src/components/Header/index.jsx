import headerLogo from "../../assets/icons/header-icon.svg";
import Button from "../Button";

const Header = () => {
  const redirectToContact = () => {
    window.location.href = "#contact-me";
  };

  return (
    <header className="flex items-center justify-around max-h-fit mt-5">
      <div>
        <img src={headerLogo} alt="" />
        <h1 className="text-sky-50 font-poppins">Fellipe Marcel</h1>
        <h2 className="text-sky-50 text-xs italic font-poppins">
          Full Stack Web Developer
        </h2>
      </div>
      <div className="flex justify-around items-center w-2/5">
        <a href="#" className="text-sky-50 hover:text-yellow-400 font-poppins">
          Home
        </a>
        <a
          href="#about-me"
          className="text-sky-50 hover:text-yellow-400 font-poppins"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="text-sky-50 hover:text-yellow-400 font-poppins"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-sky-50 hover:text-yellow-400 font-poppins"
        >
          Experience
        </a>
        <Button
          onClick={redirectToContact}
          btnContent="Contact Me"
          btnType="button"
        />
      </div>
    </header>
  );
};

export default Header;
