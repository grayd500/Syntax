
import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
    const currentPage = useLocation().pathname;

    const textColor = '#1FBEFDff';

    return (
        <header className="bg-black-900 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link
                    to="/"
                    className="title-font text-white font-medium mb-4 md:mb-0 ml-3 text-xl"
                >
                    SYNTAX
                </Link>

                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">

                    <Link
                        to="/about"
                        className={
                            currentPage === "/about"
                                ? "mr-5 hover:text-white active"
                                : "mr-5 hover:text-white"
                        }
                        style={{ color: textColor }}
                    >
                        Bio
                    </Link>
                    <Link
                        to="/music"
                        className={
                            currentPage === "/music"
                                ? "mr-5 hover:text-white active"
                                : "mr-5 hover:text-white"
                        }
                        style={{ color: textColor }}
                    >
                        Music
                    </Link>
                    <Link
                        to="/merch"
                        className={
                            currentPage === "/merch"
                                ? "mr-5 hover:text-white active"
                                : "mr-5 hover:text-white"
                        }
                        style={{ color: textColor }}
                    >
                        Merch
                    </Link>
                    <Link
                        to="/tour"
                        className={
                            currentPage === "/tour"
                                ? "mr-5 hover:text-white active"
                                : "mr-5 hover:text-white"
                        }
                        style={{ color: textColor }}
                    >
                        Tour
                    </Link>
                    <Link
                        to="/contact"
                        className={
                            currentPage === "/contact"
                                ? "mr-5 hover:text-white active"
                                : "mr-5 hover:text-white"
                        }
                        style={{ color: textColor }}
                    >
                        Contact Us
                    </Link>
                </nav>
                {/* <Link
                    to="/tour"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                >
                    Follow us on Tour!
                </Link> */}
            </div>
        </header>
    );
}
