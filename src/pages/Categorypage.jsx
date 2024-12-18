import { useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination";

function Categorypage(){
    const location =useLocation();
    const Category=location.pathname.split("/").at(-1);
    const navigate =useNavigate()
    return(

        <div>
            <Header>

            </Header>

            <div>

            <button onClick={()=>navigate(-1)} className="bg-sky-950 px-[20px] py-[10px] text-white mt-2">Back</button>
            <h2>Blogs on<span>{Category}</span></h2>
            </div>

            <Blogs></Blogs>
            <Pagination></Pagination>

        </div>

    )
}

export default Categorypage;