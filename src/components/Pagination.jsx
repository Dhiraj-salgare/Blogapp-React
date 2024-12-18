
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination(){

    const {totalpage,page,handlepagechange}=useContext(AppContext)
    return(
        <div className="flex gap-[20px] mt-2">
         {
               page>1 && <button onClick={()=>handlepagechange(page-1)} className="bg-sky-950 px-[20px] py-[10px] text-white">Prev</button>

         }
         {
            page < totalpage &&<button onClick={()=>handlepagechange(page+1)} className="bg-sky-950 px-[20px] py-[10px] text-white">Next</button>
         } 

         <p>
            page {page} of {totalpage}
         </p>
       
       
        </div>

    )
}

export default Pagination;