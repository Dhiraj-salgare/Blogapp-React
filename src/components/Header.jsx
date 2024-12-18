import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div className="bg-sky-950 text-white">
        <div className=" bg-sky-950 text-white flex justify-between px-3 py-3">
            <h2 className="font-bold ">BLOG APP</h2>
            <div>
            <NavLink to="/"><p>Home</p></NavLink>
            </div>

        </div>
        </div>
    )
}

export default Header;