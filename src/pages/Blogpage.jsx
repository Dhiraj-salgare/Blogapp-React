import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Card from '../components/Card'

function Blogpage(){
   const [blog,setblog] = useState(null);
   const [relatedblog,setrelatedblog] =useState([]);
   const location = useLocation();
   const navigation=useNavigate();
   const{loading,setloading}=useContext(AppContext)
   const blogId=location.pathname.split("/").at(-1);
   

   async function fetchrealatedblogs() {

    const newurl="https://codehelp-apis.vercel.app/api/"
    setloading(true)
    const url=`${newurl}get-blog?blogId=${blogId}`
    try{
      const res=await fetch(url);
      const data=await res.json();
      setblog(data.blog)
      setrelatedblog(data.relatedBlogs)


        
    }
    catch(error){
        console.log("error ocuured");
        setblog(null);
        setrelatedblog([])
    }

    setloading(false)
    
   }

   useEffect(()=>{
        if(blogId){
            fetchrealatedblogs();
        }

   },[location.pathname])





    
    return(
        <div>
            <Header></Header>
            <div>
                <button onClick={()=>navigation(-1)} className="bg-sky-950 px-[20px] py-[10px] text-white">Back</button>
            </div>

            {
                loading?<p>loading</p>:blog?(<div className="flex flex-col gap-3"><Card post={blog}></Card><h2>Related blogs</h2>{
                 relatedblog.map((post)=>(
                    <div>
                        <Card post={post}></Card>
                    </div>

                 ))


                }</div>):(<div>no blogs found</div>)
            }


            <Pagination></Pagination>
        </div>

    )
}
export default Blogpage;