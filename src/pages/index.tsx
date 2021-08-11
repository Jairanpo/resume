// libraries:
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
import {ExperienceComponent} from '../components/experience/experience.component';
import {HeaderComponent} from "../components/header/header.component";
import {IconsComponent} from "../components/icons/icons.component";
import {EducationComponent} from "../components/education/education.component";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//=============================================================================

export default function Home() {
    return (
        <div className="h-full w-full font-roboto container mx-auto">
            <div className='relative z-10 p-8'>
                <div className='flex justify-center'>
                    <HeaderComponent/>
                </div>
                <hr className='mt-4'/>
                <div className='text-4xl text-darkGreen font-black my-4'>Experience:
                </div>
                <div className='flex flex-row'>
                    <ExperienceComponent/>
                    <div>
                        <IconsComponent/>
                        <hr className='mt-4'/>
                        <div
                            className='text-4xl text-darkGreen font-black my-4'>Education:
                        </div>
                        <EducationComponent/>
                    </div>
                </div>
            </div>
        </div>
    )
}
