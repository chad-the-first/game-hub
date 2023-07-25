import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: 'bfa2a45f0cfb4f07b094c5bfdd6dca03',
    }
})