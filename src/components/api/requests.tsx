import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com/";
const SECOND_API_URL = "https://fakerapi.it/api/v1";

axios.defaults.baseURL = FIRST_API_URL;
axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};
axios.defaults.withCredentials = true;

const firstApiAxios = axios.create({
    baseURL: FIRST_API_URL,
    headers: {
        Authorization: `Bearer $sdfdfsghgfhvc}`,
    },
    withCredentials: false,
});
const secondApiAxios = axios.create({
    baseURL: SECOND_API_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    withCredentials: true,
});

// promis style
// export const getPosts = axios({ url: `${FIRST_API_URL}/posts`, method: "GET", params: { offset: 0 } });

// async await style
export const getPosts = async () => {
    try {
        const res = await firstApiAxios.get(`/posts`, {
            params: { offset: 0, limit: 10 },
        });
        console.log(res.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error, "err");
            console.log(error.response?.data.errText, "error");
        } else if (error instanceof Error) console.log(error.message);
    }
};

export const createPost = async () => {
    try {
        const res = await firstApiAxios.post(`/posts`, {
            body: "world",
            title: "helo",
        });
        console.log(res.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error, "err");
            console.log(error.response?.data.errText, "error");
        } else if (error instanceof Error) console.log(error.message);
    }
};

export const getImg = async () => {
    try {
        const res = await secondApiAxios.get("/images");
        console.log(res.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error, "err");
            console.log(error.response?.data.errText, "error");
        } else if (error instanceof Error) console.log(error.message);
    }
};
