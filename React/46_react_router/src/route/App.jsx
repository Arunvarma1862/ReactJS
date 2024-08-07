import "./App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PostListProvider from "../store/post-list-stote";


function App() {
  const [selectTab, setselectTab] = useState("Home");
const location= useLocation()

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectTab={selectTab} setselectTab={setselectTab}></Sidebar>
        <div className="app-content scroll">
          <Header ></Header>
          <Outlet/>
          {/* {selectTab == "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )} */}
          <Footer></Footer>
          </div>
        </div>
      
    </PostListProvider>
  );
}

export default App;
