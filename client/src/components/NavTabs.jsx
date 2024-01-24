import { SiMusicbrainz } from "react-icons/si";
import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
    const currentPage = useLocation().pathname;

    const textColor = '#E53179ff';
    const hoverColor = '#FFFFFF';
    const iconColor = '#E53179ff';

    return (
        <header className="bg-black fixed w-full top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
                <div className="md:w-full text-center">
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center justify-center text-base">
                        <Link
                            to="/"
                            className={`mr-5 ${currentPage === "/" ? "active" : ""}`}
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

                        <Link
                            to="/members"
                            className="mr-5 hover:text-white"
                            style={{
                                color: (currentPage === "/member ? hoverColor : textColor"), fontSize: '18px', textDecoration: 'none'
                            }}
                        >
                            <SiMusicbrainz size={32} style={{ color: iconColor }} />
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
