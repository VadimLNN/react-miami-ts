import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com/";
const SECOND_API_URL = "https://fakerapi.it/api/v1";

// axios.defaults.baseURL = FIRST_API_URL;
// axios.defaults.headers.common = {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
// };
// axios.defaults.withCredentials = true;

// promis style
// export const getPosts = axios({ url: `${FIRST_API_URL}/posts`, method: "GET", params: { offset: 0 } });

// async await style
export const getPosts = async () => {
    try {
        const res = await axios.get(`${FIRST_API_URL}/posts`, {
            params: { offset: 0, limit: 10 },
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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
        const res = await axios.post(`${FIRST_API_URL}/posts`, {
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
