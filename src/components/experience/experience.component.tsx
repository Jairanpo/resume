// libraries:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//=============================================================================


export function ExperienceComponent() {
    return (
        <div>
            {
                listOfExperiences.map((e) => {
                    return (
                        <div
                            className='text-pale bg-medGreen border
                            rounded p-8 m-2 shadow-lg'>
                            <div className='font-bold text-3xl'>
                                {e.place}
                            </div>
                            <div className='text-lg underline'>
                                {e.position}
                            </div>
                            <div className='py-4'>
                                {e.description}
                            </div>
                            <div className='flex flex-row'>
                                {
                                    e.technologies.map(function (t) {
                                        return (
                                            <div
                                                className='font-black
                                                rounded bg-lightWarm px-1 m-1
                                                text-medGreen'>
                                                {t}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


const listOfExperiences = [
    {
        place: 'Mighty Animation',
        position: 'Head of Pipeline Development',
        description: `Support development of new features required for the
        delivery of the show FriendzSpace in conjunction with FlyingBark
        Studios, as a team we where able to deploy large systems that 
        help us support and coordinate data delivery and registers 
        between studios, also create tools that allow artists to get
        the data required on their department in an organized and easier 
        way. I also have the opportunity to work and communicate with a client
        at Australia which was a very important opportunity to understand how
        to collaborate with clients that only speak english (spanish is my
        native language)`,
        technologies: [
            'Python',
            'AWS',
            'PySide',
            'Qt',
            'Maya',
        ]
    },

    {
        place: 'Independent Fullstack Developer',
        position: 'Developer',
        description: `I been contracted to work independently for several 
        companies like laepocafilm.com, LA CETTO winery and currently for
        Tamashii México. The project I've been working range from 
        fullstack web development for ecommerce platforms with the MERN 
        stack and Wordpress, to augmented reality with the Unity Game Engine, 
        this has expose new knowledge from different areas that often enrich my
        understanding of technology.`,
        technologies: [
            'Javascript',
            'Node',
            'React',
            'Vue',
            'Next.js',
            'Python',
            'Webpack',
            'C#',
            'Unity',
            'Wordpress'
        ]
    },

    {
        place: 'Ool Digital: VFX Studio',

        position: 'Technical Director & SysAdmin',
        description: `I was in charge of creating the data flow among
        all the departments involved on the creation of CG content
        as well as hardware maintenance, network security, 
        communication and documentation.`,
        technologies: [
            'Python',
            'Javascript',
            'Webpack',
            'Qt',
            'MikroTik',
            'Houdini',
            'Maya',
            'Redshift'
        ]
    },


    {
        place: `Talent Network: Technology Events`,
        position: `Fullstack Developer`,
        description: `Backend development of a RestAPI service,
                    and deployed the database designed for it. 
                    This service provides information about articles, 
                    courses and events related with technology as well
                    as services like authentication, registration, security.
                    On the frontend side, I helped the team with the frontend
                    architecture, client side requests and security protocols.`,
        technologies: [
            'Python',
            'Javascript',
            'Houdini',
            'Webpack',
            'Qt',
            'MikroTik',
            'Maya',
            'Redshift'
        ]
    },

    {
        place: `Huevocartoon: CG Film`,
        position: `Layout Technical Director`,
        description: `Creating tools for the cinematography team and using several CG and VFX APIs.
                    Cloth simulation system on top of nCloth system to improve delivery times for the VFX department.
                    Use of linear algebra to solve problems in 3D environments.
                    Verify and automate data transference from the cinematography department.
                    Automatic rigging with focus on performance to help the staging and ease the task of analazing the flow of the editing process.
                    Stage and camera artist.
                    Environment concept artist & Graphic designer.`,
        technologies: [
            'Python',
            'Qt',
            'JSON',
            'Mel',
            'Maya',
            'Softimage',
            'Photoshop',
            'Illustrator'
        ]
    },
    {
        place: `Metacube: CG Film`,
        position: `Layout and Technical Artist`,
        description: `I collaborated as an artist working on the ciematography 
                    for the film Salma's Big Wish,also developed scripts that 
                    automate processes for the team.`,
        technologies: ['Python', 'Maya', 'Hiero']
    }
]
