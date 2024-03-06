import ImageContainer from "../ImageContainer";
import htmlIcon from "../../assets/icons/icons8-html.svg";
import cssIcon from "../../assets/icons/icons8-css .svg";
import jsIcon from "../../assets/icons/icons8-javascript.svg";
import tsIcon from "../../assets/icons/icons8-typescript.svg";
import reactIcon from "../../assets/icons/icons8-react-96.svg";
import reduxIcon from "../../assets/icons/icons8-redux.svg";
import nextIcon from "../../assets/icons/icons8-nextjs .svg";
import tailwindIcon from "../../assets/icons/icons8-tailwindcss.svg";
import nodeIcon from "../../assets/icons/icons8-node-js.svg";
import mysqlIcon from "../../assets/icons/icons8-mysql.svg";
import postmanIcon from "../../assets/icons/icons8-postman-api.svg";
import bashIcon from "../../assets/icons/icons8-bash.svg";
import dockerIcon from "../../assets/icons/icons8-docker.svg";
import awsIcon from "../../assets/icons/icons8-amazon-web-services .svg";
import javaIcon from "../../assets/icons/icons8-java.svg";
import springIcon from "../../assets/icons/icons8-spring-boot.svg";

const Skills = () => {
  const technologies = [
    { icon: htmlIcon, name: "HTML" },
    { icon: cssIcon, name: "CSS" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: tsIcon, name: "TypeScript" },
    { icon: reactIcon, name: "React" },
    { icon: reduxIcon, name: "Redux" },
    { icon: nextIcon, name: "Next.js" },
    { icon: tailwindIcon, name: "TailwindCSS" },
    { icon: dockerIcon, name: "Docker" },
    { icon: awsIcon, name: "AWS" },
    { icon: nodeIcon, name: "Node.js" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: bashIcon, name: "Bash" },
    { icon: postmanIcon, name: "Postman" },
    { icon: javaIcon, name: "Java" },
    { icon: springIcon, name: "Spring Boot" },
  ];

  return (
    <div className="flex flex-col items-center justify-around mt-20 mb-20 w-full p-10 bg-sky-950 shadow-xl">
      <h1 className="text-sky-50 text-6xl mt-5 mb-10 font-poppins">Skills</h1>
      <div className="grid grid-cols-8 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="relative group cursor-pointer">
            <ImageContainer
              imgSource={tech.icon}
              imgAlt={`Ícone do ${tech.name}`}
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-center py-2">{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
