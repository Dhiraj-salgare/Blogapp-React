import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination";

function Tagpage(){

    const location=useLocation();
    const navigate =useNavigate()

    const tag=location.pathname.split("/").at(-1);
    return(
        <div>
             <Header></Header>
             <div>
             <button onClick={()=>navigate(-1)} className="bg-sky-950 mt-2">Back</button>
            
            <p>blog tagged {tag}</p>
            </div>
            <Blogs></Blogs>
            <Pagination></Pagination>

        </div>
    )
}

export default Tagpage;