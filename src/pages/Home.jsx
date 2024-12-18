import Header from "../components/Header";
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination";
function Home(){
    return(
        <div className="">
          <Header>
          </Header>

          <Blogs></Blogs>
          <Pagination></Pagination>
        
        
        </div>

    )
}
export default Home;