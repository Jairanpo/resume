// libraries:
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {useContext} from "react";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
import {SettingsContext} from "../contexts/SettingsContext";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
import {HeaderComponent} from "../components/header/Header";
import {IconsComponent} from "../components/icons/icons.component";
import Education from "../components/education/Education";
import Experience from '../components/experience/Experience';
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//=============================================================================

export default function Home() {
    const settings = useContext(SettingsContext)

    function handleLanguage(value) {
        return function (e) {
            e.preventDefault()
            settings.changeLanguage(value)
        }
    }

    return (
        <div className="h-full w-screen font-roboto xl:container xl:mx-auto">
            <div className='relative z-10 p-8'>
                <div className='w-full flex justify-center'>
                    <HeaderComponent/>
                </div>
                <hr className='mt-4'/>
                <div
                    className='w-full flex justify-center gap-2 text-xl m-6'>
                    <button onClick={handleLanguage('en')}
                            className={settings.lang === 'en' && 'underline'}>English
                    </button>
                    <button onClick={handleLanguage('sp')}
                            className={settings.lang === 'sp' && 'underline'}>Español
                    </button>
                </div>
                <div
                    className='text-4xl text-darkGreen font-black my-4'>Experience:
                </div>
                <div className='flex lg:flex-row flex-col'>
                    <Experience/>
                    <div>
                        <IconsComponent/>
                        <hr className='mt-4'/>
                        <div
                            className='text-4xl text-darkGreen font-black my-4'>Education:
                        </div>
                        <Education/>
                    </div>
                </div>
            </div>
        </div>
    )
}
