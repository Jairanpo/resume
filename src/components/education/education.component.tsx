// libraries:
import Link from 'next/link'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//=============================================================================


export function EducationComponent() {
    return (
        <div>
            {
                listOfCourses.map(function (c) {
                    return (
                        <div
                            className='bg-medGreen text-pale rounded
                            m-4 p-8 shadow-lg bg-opacity-70'>
                            <div className='font-medium text-xl'>
                                {c.title}
                            </div>
                            <div>
                                <Link href={c.link}>
                                    <a>
                                        {c.link}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )

}


const listOfCourses = [
    {
        title:
            "Technical Support Fundamentals. Certificate earned at Tuesday, July 23, 2019 4:36 AM GMT",
        link: "https://coursera.org/share/0043ca93cf2c4e2e43a819235e339e72",
        academy: "Google",
        location: "Coursera.com"
    },
    {
        title:
            "The Bits and Bytes of Computer Networking. Certificate earned at Tuesday, July 23, 2019 4:36 AM GMT",
        link: "https://coursera.org/share/eb426a1e622626b1bc9e6a378ffec2df",
        academy: "Google",
        location: "Coursera.com"
    },
    {
        title:
            "Operating Systems and You: Becoming a Power User. Certificate earned at Saturday, September 14, 2019 5:48 PM GMT",
        link: "https://coursera.org/share/e993a83fa423d16ad7745f6aa3696a9a",
        academy: "Google",
        location: "Coursera.com"
    },
    {
        title:
            "System Administration and IT Infrastructure Services. Certificate earned at Wednesday, November 13, 2019 10:36 PM GMT",
        link: "https://coursera.org/share/da628e9dc52003d936b5f52a9ec0090f",
        academy: "Google",
        location: "Coursera.com"
    },
    {
        title:
            "IT Security: Defense against the digital dark arts. Certificate earned at Monday, January 20, 2020 11:19 PM GMT",
        link: "https://coursera.org/share/ffb842a802ac0f9f64b812fac15576f2",
        academy: "Google",
        location: "Coursera.com"
    },
    {
        title: "CG Animation and VFX",
        link: "http://uartesdigitales.edu.mx/",
        academy: "Universidad de Artes Digitales",
        location: "Guadalajara. Jalisco. Mexico"
    }
]
