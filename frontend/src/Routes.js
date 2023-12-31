import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import React from 'react'
import App from "./App";
import SinglePost from "./SinglePost";
import UpdatePost from "./UpdatePost";

const RoutedApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact="true" element={<App />} />
                <Route path="/create" exact="true" element={<Create />} />
                <Route path="/post/:id" exact="true" element={<SinglePost />} />
                <Route path="/post/update/:id" exact="true" element={<UpdatePost />} />
            </Routes>
        </Router>
    )
}

export default RoutedApp
