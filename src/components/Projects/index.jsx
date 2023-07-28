import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center mt-20"
    >
      <h1 className="text-sky-50 text-6xl mb-5 font-poppins">My projects</h1>
      <Tabs>
        <TabList className="bg-transparent">
          <Tab>
            <p>Front-end</p>
          </Tab>
          <Tab>Back-end</Tab>
        </TabList>

        <TabPanel className="mt-10">
          <ProjectCard
            projectName="Front-end Online Store"
            projectDescription="Loja online"
            projectLink="https://github.com/fellipemrcl/frontend-online-store"
          />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
