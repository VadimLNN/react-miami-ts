import { useEffect } from "react";
import { createPost, getImg, getPosts, getPostsController } from "../components/api/requests";
import { Card } from "@mui/material";

const MainPage = () => {
    useEffect(() => {
        //promis style
        //getPosts.then((res) => console.log(res)).catch((err) => console.log(err));

        //async await style
        getPosts();
        getPostsController.abort();
        createPost();
        getImg();
    });
    return <Card></Card>;
};

export default MainPage;
