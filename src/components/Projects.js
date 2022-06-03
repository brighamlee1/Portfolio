import '../styles/projects.css'

function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Crypto Viewer',
            image: 'https://user-images.githubusercontent.com/91819733/171486084-54bcb5da-02f0-4bad-a4c5-75b86adab312.png',
            github: 'https://github.com/brighamlee1/crypto-viewer',
            live: 'https://crypto-viewer-321.herokuapp.com/',
            description: 'React, JavaScript, CSS, API',
        },
        {
            id: 2,
            name: 'Twitter Clone',
            image: 'https://user-images.githubusercontent.com/91819733/170277299-de38efa6-acfb-4c8c-a5ed-8805a0e309c5.png',
            github: 'https://github.com/brighamlee1/Twitter-Clone',
            live: 'https://twitter-mock-321.herokuapp.com/',
            description: "Express, NodeJS, MongoDB, EJS, CSS",
        },
        {
            id: 3,
            name: 'War Card Game',
            image: 'https://user-images.githubusercontent.com/91819733/163030480-1e273496-4589-462d-83dd-6244e471194d.png',
            github: 'https://github.com/brighamlee1/War-Project-1',
            live: 'https://brighamlee1.github.io/War-Project-1/',
            description: 'HTML, CSS, JavaScript',
        },
        {
            id: 4,
            name: 'Pokedex',
            image: 'https://user-images.githubusercontent.com/91819733/170913676-989f42fc-3bce-481a-921a-e37aeeca334c.png',
            github: 'https://github.com/brighamlee1/poke-dex',
            live: 'https://pokedex-321.herokuapp.com/pokedex',
            description: 'Express, NodeJS, EJS, CSS',
        },
        {
            id: 5,
            name: 'Tamagotchi',
            image: 'https://user-images.githubusercontent.com/91819733/170913977-a9333622-1e85-427a-93b4-b5c31de67e17.png',
            github: 'https://github.com/brighamlee1/tamagotchi',
            live: 'https://dog-tamagotchi.netlify.app/',
            description: 'HTML, CSS, JavaScript',
        },
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