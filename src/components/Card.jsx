import { NavLink } from "react-router-dom"

function Card({post}){
    return(
        <div className="mx-auto">
            <NavLink to={`blogs/${post.id}`}><span className="font-bold">{post.title}</span></NavLink>
            <p>By<span>{post.author}</span> on {" "} <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}><span className="text-sky-500">{post.category}</span></NavLink></p>
            <p>posted on{post.date}</p>
            <p>{post.content}</p>

             {

                post.tags.map((tag,index)=><NavLink to={`/tag/${tag.replaceAll(" ","-")}`} key={index}><span className="text-blue-600">#{tag}</span></NavLink>)
             }




        </div>
    )
}

export default Card