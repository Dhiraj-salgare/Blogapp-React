
import {createContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../baseurl';


export const AppContext=createContext()


export default function AppContextProvider({children}){
    const [loading,setloading]=useState(false);
    const [post,setpost]=useState([])
    const [page,setpage]=useState(1);
    const [totalpage,settotalpage]=useState(null)
    const navigation=useNavigate();


    async function fetchBlogPost(page,tag,category){
        setloading(true)

        let url=`${baseurl}?page=${page}`
        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url+=`&category=${category}`
        }

        try{

            const result=await fetch(url)
            const data=await result.json();
            setpage(data.page);
            setpost(data.posts)
            settotalpage(data.totalPages)


        }
        catch(error){
              console.log("error in fetching data ")
              setpage(1);
              setpost([]);
              settotalpage(null)
        }

        setloading(false)
    }


    function handlepagechange(page){
        navigation({search:`?page=${page}`})
        setpage(page)

    }

    const value={page,setpage,loading,setloading,totalpage,settotalpage,post,setpost,fetchBlogPost,handlepagechange}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}