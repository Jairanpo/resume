// libraries:
import Head from 'next/head'
import Link from 'next/link'
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
        <div className="h-full container mx-auto m-auto my-8 font-roboto">
            <div className='flex justify-center'>
                <HeaderComponent/>
            </div>
            <hr/>
            <div className='text-2xl text-warm font-bold my-4'>Experience:</div>
            <div className='flex flex-row'>
                <ExperienceComponent/>
                <IconsComponent/>
            </div>
            <hr/>
            <div>
                <div className='text-2xl text-warm font-bold my-4'>Education:
                </div>
                <EducationComponent/>
            </div>
        </div>
    )
}
