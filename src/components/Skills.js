import '../styles/skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "Typescript", "TailwindCSS", "React", "Next.js", "Vue", "Nuxt.js", "Node.js", "Nest.js", "PostgreSQL", "Git", "Prisma"];

    AOS.init();
    return (<>
        <div
            id="skills"
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
        >
            <h1 className="skills-title">Skills</h1>
            <div className="skills-container">
                <div className="skills-box">
                    {skills.map((skill) => {
                        return (
                            <p key={skill}><i className="fa-solid fa-angles-up"></i> {skill}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
    );
}

export default Skills;
