import profilePic from '../../assets/images/profile-pic.png';
import Button from '../Button';

const AboutMe = () => {
    return (
        <section id="about-me" className="flex items-center justify-between m-auto mt-10 w-7/12">
            <img src={profilePic} alt="" className="max-w-sm rounded-full shadow-yellow-500 shadow-2xl" />
            <div className="flex flex-col max-w-lg">
                <h1 className="text-sky-50 text-6xl mb-5 font-poppins">About Me</h1>
                <p className="text-sky-50 text-justify font-vollkorn text-xl">Hello! I am Fellipe, a 28-year-old lawyer from Alagoinhas, Bahia, who decided to transition into the web development field. Currently, I am enrolled in Trybe and will graduate as a full stack developer in January 2024. I am a determined, self-taught professional with a passion for continuous learning. I am excited to build a career in web development and create innovative technological solutions.</p>
            <div className="flex items-center justify-around mt-5">
                <Button btnContent="Hire Me" btnType="button" />
                <Button btnContent="Resume" btnType="button" />
            </div>
            </div>
        </section>
    )
};

export default AboutMe;