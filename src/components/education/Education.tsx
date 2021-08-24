// libraries:
import Link from 'next/link'
import {useContext} from "react";
import Image from 'next/image'
import {v4 as uuid} from 'uuid'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
import {SettingsContext} from "../../contexts/SettingsContext";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
const data = require('./data.yml')
// ============================================================================ 


export default function Education() {
    const settings = useContext(SettingsContext)
    return (
        <div>
            {
                data[settings.lang].map(function (c, i) {
                    return (
                        <div
                            key={uuid()}
                            className='bg-green'>
                            <div>
                                <div
                                    className='text-2xl font-bold flex flex-row items-center'>
                                    <div className='flex-grow'>{c.academy}</div>
                                </div>
                                <Icons icons={c.icons}/>
                            </div>
                            <div className='font-medium text-md'>
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

function Icons({icons}) {
    return (
        <div className='h-12 relative flex flex-row w-full'>
            {
                icons.map(
                    (i) => {
                        return (
                            <Image key={uuid()} width={100} height={200}
                                   objectFit='scale-down'
                                   src={i}/>
                        )
                    }
                )
            }
        </div>
    )

}


