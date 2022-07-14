import './Header.css'
import { Navbar } from '../Navbar/Navbar'

export function Header() {
    return (
        <header className='header center'>
            <h3>
                <a href='' className='link'>
                    RS.
                </a>
            </h3>
            <Navbar />
        </header>
    )
}