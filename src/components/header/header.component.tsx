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
            <div className="flex flex-row items-center">
                <div className="text-3xl font-bold text-center">
                    Jair Anguiano Porras
                    <div className="text-lg">
                        Software Developer | Pipeline TD
                    </div>
                    <div className="text-lg">
                        Guadalajara. Jalisco. México.
                    </div>
                </div>
                <div
                    className="mx-4 text-md font-medium grid text-right bg-lightWarm rounded p-4">
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
