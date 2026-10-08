import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <Link 
                to={"/"} 
                className="navbar-link fixed top-10 start-9 md:start-[93px] text-stone-100 mix-blend-difference uppercase z-100">
                    Projectos
            </Link>
            <Link 
                to={"/about"} 
                className="navbar-link fixed top-10 end-9 md:end-[93px] text-stone-100 mix-blend-difference uppercase z-100">
                    About Me
            </Link>
        </>
    )
}

export default NavBar