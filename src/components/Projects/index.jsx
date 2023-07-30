import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectCard from "../ProjectCard";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const handleFetchRepositories = async () => {
    const { data } = await api.get(`/users/fellipemrcl/repos`);
    if (data) {
      setRepositories(data);
    }
  };
  useEffect(() => {
    handleFetchRepositories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center mt-20"
    >
      <h1 className="text-sky-50 text-6xl mb-5 font-poppins">Projects</h1>
      <Tabs>
        <div className="flex items-center justify-center m-10">
          <TabList className="bg-transparent text-sky-50 text-lg font-poppins">
            <Tab>
              <p>Front-end</p>
            </Tab>
            <Tab>
              <p>Back-end</p>
            </Tab>
          </TabList>
        </div>

        <TabPanel className="flex flex-row mt-10">
          {repositories
            .filter((r) => r.topics.includes("frontend"))
            .map((r) => (
              <ProjectCard
                className="card mr-10"
                key={r.id}
                projectDescription={r.description}
                projectLink={r.html_url}
                projectName={r.name.toUpperCase().replaceAll("-", " ")}
              />
            ))}
        </TabPanel>
        <TabPanel className="mt-10">
          {repositories
            .filter((r) => r.topics.includes("backend"))
            .map((r) => (
              <ProjectCard
                className="card mr-5"
                key={r.id}
                projectDescription={r.description}
                projectLink={r.html_url}
                projectName={r.name.toUpperCase().replaceAll("-", " ")}
              />
            ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
