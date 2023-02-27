export default function Header() {
    return (
        <div>

            <nav className={"bg-black  bg-opacity-40"}>
                <div className="container flex flex-row-reverse items-center justify-between mx-auto ">

                    <div className="flex md:order-2">
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="w-full md:flex md:w-auto md:order-1" id="navbar-sticky"
                    style={{flexDirection:'row-reverse'}}>
                        <ul className="flex flex-row-reverse p-2 gap-5">
                            <li>
                                <a href="#" className=" text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="  text-white">About</a>
                            </li>
                            <li>
                                <a href="#" className=" text-white">Services</a>
                            </li>
                            <li>
                                <a href="#" className=" text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}