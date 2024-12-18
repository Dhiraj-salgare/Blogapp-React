import logo from './logo.svg';
import './App.css';
import  Home from './pages/Home'
import { AppContext } from './context/AppContext';
import {Routes,Route, Link, useSearchParams, useLocation} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import Blogpage from './pages/Blogpage';
import Tagpage from './pages/Tagpage';
import Categorypage from './pages/Categorypage'


function App() {
  const {fetchBlogPost}=useContext(AppContext)
  const[searchParam,setSearchparam]=useSearchParams();
  const location=useLocation();



  useEffect(()=>{
    const page=searchParam.get("page") ?? 1
    
    if(location.pathname.includes("tag"))
    {
      const tag=location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page),tag)
    }


    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page),null,category);
    }

    else{
      fetchBlogPost(Number(page))
    }


  },[location.pathname,location.search])
  
  return (
    <div className="w-full">
      <div className='max-w-[900px] border-[1px] border-black mx-auto px-[20px] py-[10px] text-justify'>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs/:blogsId'  element={<Blogpage></Blogpage>}></Route>
        <Route path='/tag/:tag' element={<Tagpage></Tagpage>}></Route>
        <Route path='/categories/:category' element={<Categorypage></Categorypage>}></Route>
      </Routes>
      </div>
     
    </div>
  );
}

export default App;
