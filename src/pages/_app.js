// libraries:
import '../../styles/globals.css'
import 'tailwindcss/tailwind.css'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
import {SettingsProvider} from '../contexts/SettingsContext';
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
// ============================================================================

function MyApp({Component, pageProps}) {
    return (
        <SettingsProvider>
            <Component {...pageProps} />
        </SettingsProvider>
    )
}


export default MyApp
