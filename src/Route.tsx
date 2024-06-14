import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SocialFeed from "./components/Feed/SocialMediaFeed";
import CreatePostForm from "./components/Feed/UploadFeed";

const RouterApp: React.FC = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/feed" element={<SocialFeed/>} />
                <Route path="/post" element={<CreatePostForm/>}/>
            </Routes>
        </Router>
    )
};
export default RouterApp;