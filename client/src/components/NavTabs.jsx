
import { Link, useLocation } from 'react-router-dom';

const logoSrc = '/Syn.png';

export default function NavTabs() {
    const currentPage = useLocation().pathname;

    const textColor = '#E53179ff';
    const hoverColor = '#FFFFFF';

    return (
        <header className="bg-black-900 md:sticky top-0 z-10 fixed w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> 
                <div className="md:w-full text-center">
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center justify-center text-base">

                <Link
                        to="/"
                        className="mr-5 active"
                        style={{ color: (currentPage === "/" ? hoverColor : textColor), fontSize: '18px', textDecoration: 'none' }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="mr-5"
                        style={{ color: (currentPage === "/about" ? hoverColor : textColor), fontSize: '18px', textDecoration: 'none' }}
                    >
                        About
                    </Link>
                    <Link
                        to="/music"
                        className="mr-5"
                        style={{ color: (currentPage === "/music" ? hoverColor : textColor), fontSize: '18px', textDecoration: 'none' }}
                    >
                        Music
                    </Link>
                    <Link
                        to="/merch"
                        className="mr-5 hover:text-white"
                        style={{ color: (currentPage === "/merch" ? hoverColor : textColor), fontSize: '18px', textDecoration: 'none' }}
                    >
                        Merch
                    </Link>
                    <Link
                        to="/tour"
                        className="mr-5 hover:text-white"
                        style={{ color: (currentPage === "/tour" ? hoverColor : textColor), fontSize: '18px', textDecoration: 'none' }}
                    >
                        Tour
                    </Link>
                    <Link
                        to="/contact"
                        className="mr-5 hover:text-white"
                        style={{ color: (currentPage === "/contact" ? hoverColor : textColor), fontSize: '18px', textDecoration: 'none' }}
                    >
                        Contact Us
                    </Link>
                </nav>
                <img 
                    src={logoSrc}
                    alt="80s style pink Syntax Logo"
                    className="mb-2"
                    style={{ 
                        width: '300px', 
                        height: 'auto', 
                        display: 'block', 
                        margin: '0 auto',
                       
                    }}
                />
                </div>
            </div>
        </header>
    );
}
