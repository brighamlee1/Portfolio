import '../styles/projects.css'

function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Day Orders',
            image: '/dayorders.png',
            github: 'https://github.com/brighamlee1/streamline',
            live: 'https://dayorders.efpstl.com',
            description: 'Nuxt.js, Prisma, Neon.tech, Firebase',
        },
        {
            id: 2,
            name: 'Jersey Closet',
            image: 'https://github.com/brighamlee1/portfolio/assets/91819733/ea7e3a95-d2b6-40c4-8ee1-ae50009b5937',
            github: 'https://github.com/brighamlee1/jersey-shop-frontend',
            live: 'https://jersey-closet.netlify.app/jerseys',
            description: 'React, JavaScript, CSS, API',
        },
        {
            id: 3,
            name: 'Crypto Viewer',
            image: 'https://user-images.githubusercontent.com/91819733/171486084-54bcb5da-02f0-4bad-a4c5-75b86adab312.png',
            github: 'https://github.com/brighamlee1/crypto-viewer',
            live: 'https://crypto-viewer.onrender.com/',
            description: 'React, JavaScript, CSS, API',
        },
        {
            id: 4,
            name: 'Twitter Clone',
            image: 'https://user-images.githubusercontent.com/91819733/170277299-de38efa6-acfb-4c8c-a5ed-8805a0e309c5.png',
            github: 'https://github.com/brighamlee1/Twitter-Clone',
            live: 'https://twitter-clone-d5t8.onrender.com/',
            description: "Express, NodeJS, MongoDB, EJS, CSS",
        }
    ]

    return (
        <div className="project-section" id="projects">
            <h1 className="project-title" data-aos="fade-in"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            >Projects</h1>
            <div className="projects-box">
                {projects.map((project) => {
                    return (
                        <div className="project-container" key={project.id}>
                            <div className="project" data-aos="fade-in"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                <img className="project-image" src={project.image} alt={project.name} />
                                <h3 className='project-name'>{project.name}</h3>
                                <p className="languages-used">{project.description}</p>
                                <a className="github-button" href={project.github} target="_blank" rel="noreferrer">Github</a>
                                <a className="live-button" href={project.live} target="_blank" rel="noreferrer">Live</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Projects;