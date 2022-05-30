import '../styles/projects.css'

function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Crypto Viewer',
            image: 'https://user-images.githubusercontent.com/91819733/170911813-60825772-0591-4356-a29f-7494e529b0b1.png',
            github: 'https://github.com/brighamlee1/crypto-viewer',
            live: 'https://crypto-viewer-321.herokuapp.com/',
            description: 'Displays the latest crypto stats and news.',
        },
        {
            id: 2,
            name: 'Twitter Clone',
            image: 'https://user-images.githubusercontent.com/91819733/170277299-de38efa6-acfb-4c8c-a5ed-8805a0e309c5.png',
            github: 'https://github.com/brighamlee1/Twitter-Clone',
            live: 'https://twitter-mock-321.herokuapp.com/',
            description: '',
        },
        {
            id: 3,
            name: 'War Card Game',
            image: 'https://user-images.githubusercontent.com/91819733/163030480-1e273496-4589-462d-83dd-6244e471194d.png',
            github: 'https://github.com/brighamlee1/War-Project-1',
            live: 'https://brighamlee1.github.io/War-Project-1/',
            description: '',
        },
        {
            id: 4,
            name: 'Pokedex',
            image: '',
            github: 'https://github.com/brighamlee1/poke-dex',
            live: 'https://pokedex-321.herokuapp.com/pokedex',
            description: '',
        },
        {
            id: 5,
            name: 'Tamagotchi',
            image: '',
            github: 'https://github.com/brighamlee1/tamagotchi',
            live: 'https://dog-tamagotchi.netlify.app/',
            description: '',
        },
    ]

    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project) => {
                return (
                    <div key={project.id}>
                        <img className="project-image" src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.github} target="_blank" rel="noreferrer">Github</a>
                        <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                    </div>
                )
            })}
        </div>
    );
}

export default Projects;