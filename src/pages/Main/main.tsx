import { useEffect } from "react";
import { createPost, getImg, getPosts, getPostsController } from "./api/requests";
import { Card } from "@mui/material";

const Main = () => {
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

export default Main;
