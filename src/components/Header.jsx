import logoImg from '../assets/logo.png'
import { useState } from 'react';

function Header({ setCategory }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="border-gray-200">
            <div className="px-3">
                <div className="flex flex-wrap items-center justify-between py-3">
                    <div>
                        <a  className="flex">
                            <img className="h-[2rem] px-1" src={logoImg} alt="NewsApp Logo" />
                            <span className="self-center text-stone-900 text-lg font-semibold whitespace-nowrap">NewsApp</span>
                        </a>
                    </div>

                    <div className="flex md:order-2">
                        <div className="relative mr-3 md:mr-0 hidden md:block">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-gray-900 hover:fill-gray-900">
                                    <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                                </svg>
                            </div>
                        </div>
                        <button onClick={toggleMenu} type="button" className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded={menuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={`${menuOpen ? '' : 'hidden'} md:flex justify-between items-center w-full md:w-auto md:order-1`} id="mobile-menu-3">
                        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <button onClick={() => setCategory('business')} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Business</button>
                            </li>
                            <li>
                                <button onClick={() => setCategory('entertainment')} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Entertainment</button>
                            </li>
                            <li>
                                <button onClick={() => setCategory('health')} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Health</button>
                            </li>
                            <li>
                                <button onClick={() => setCategory('science')} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Science</button>
                            </li>
                            <li>
                                <button onClick={() => setCategory('sports')} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Sports</button>
                            </li>
                            <li>
                                <button onClick={() => setCategory('technology')} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Technology</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
