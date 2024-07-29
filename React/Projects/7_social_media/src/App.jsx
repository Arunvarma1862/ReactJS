import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-stote";

function App() {

  const [selectTab,setselectTab]= useState("Home");

  const handleChangeTab=(tab)=>{
    setselectTab(tab)
  }

  return (
    
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectTab={selectTab} handleChangeTab={handleChangeTab}></Sidebar>
        <div className="app-content scroll">
          <Header></Header>
          {selectTab=="Home"? <PostList></PostList>:<CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
      </PostListProvider>
  );
}

export default App;
