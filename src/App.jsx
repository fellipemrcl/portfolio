import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Section from "./components/Section";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Section />
      <AboutMe />
      <Projects />
      <Skills />
      <h1 id="experience" className="experience-heading text-6xl font-poppins mb-5 text-sky-50 text-center mt-10">
        My experience
      </h1>
      <div className="flex flex-col items-center">
        <Experience
          companyName="Self-Employed"
          period="Feb/2020 - Dec/2022"
          position="Lawyer"
          activities={[
            "Provide legal advice to clients, providing legal guidance on various issues;",
            "Perform analysis of contracts, agreements and legal documents, ensuring their validity and compliance;",
            "Prepare procedural documents, such as petitions, appeals and opinions, to represent clients in courts;",
            "Participate in hearings and sessions, presenting arguments and defenses on behalf of clients;",
          ]}
        />
        <Experience
          companyName="Liq Corp S/A"
          period="Dec/2016 - Dec/2018"
          position="Attendant"
          activities={[
            "Answer calls from customers interested in telephone and internet services, providing detailed information about the products offered;",
            "Identify customer needs and recommend appropriate solutions to meet their demands;",
            "Accurately record customer information and update CRM systems with contact details;",
            "Offer promotions and discounts, aiming to increase sales conversion and customer satisfaction;",
          ]}
        />
      </div>
      <Contact />
    </>
  );
};

export default App;
