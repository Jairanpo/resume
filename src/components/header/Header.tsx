// libraries:
import Link from "next/link";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//=============================================================================


export function HeaderComponent() {
    return (<div className="
        h-full text-medGreen flex py-2
        ">
            <div className="flex flex-col md:flex-row items-center">
                <div className="text-medGreen text-5xl font-bold text-center">
                    Jair Anguiano
                    <div
                        className='text-medGreen text-opacity-80 my-2 text-center'>
                        <div className="text-xl">
                            Jesús Jair Anguiano Porras
                        </div>
                        <div className="text-xl">
                            Software Developer | Pipeline TD
                        </div>
                        <div className="text-xl">
                            Guadalajara. Jalisco. México.
                        </div>

                    </div>
                </div>
                <div
                    className="bg-green">
                    <div>
                        jairanpo@gmail.com
                    </div>
                    <Link href="https://jairanpo.com">
                        <a target="_blank">
                            jairanpo.com
                        </a>
                    </Link>
                    <Link href="https://github.com/jairanpo">
                        <a target="_blank">
                            github.com/jairanpo
                        </a>
                    </Link>
                    <div>
                        (+52) 3325366927
                    </div>
                </div>
            </div>
        </div>
    )
}
