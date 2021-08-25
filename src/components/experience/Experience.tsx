// libraries:
import {useContext} from "react";
import {v4 as uuid} from 'uuid';
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
//=============================================================================


export default function Experience() {
    const settings = useContext(SettingsContext)

    return (
        <div>
            {
                data[settings.lang].map((e, i) => {
                    return (
                        <div
                            key={uuid()}
                            className='bg-green'>
                            <div className='font-bold text-3xl'>
                                {e.place}
                            </div>
                            <div className='text-lg underline'>
                                {e.position}
                            </div>
                            <div className='text-lg'>
                                {e.period}
                            </div>
                            <div className='py-4 text-justify w-full'>
                                {e.description}
                            </div>
                            <div className='flex flex-row flex-wrap'>
                                {
                                    e.technologies.map(function (t) {
                                        return (
                                            <div
                                                key={uuid()}
                                                className='font-black
                                                rounded bg-lightWarm px-2 m-1
                                                text-medGreen py-1'>
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


