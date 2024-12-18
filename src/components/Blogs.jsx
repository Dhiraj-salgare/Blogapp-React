import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from './Spinner'
import Card from "./Card";
import Pagination from "./Pagination";
function Blogs(){
    const {post,loading}=useContext(AppContext)

     
    

    return(
        <div className="flex flex-col gap-[10px] mx-auto">
            {
                loading? (<Spinner></Spinner>):(post.length==0?(<div><p>no post founds</p></div>):(post.map((post)=>(
                    <Card post={post} key={post.id}></Card>
                ))))
            }

           
            

        </div>
    )
}

export default Blogs;