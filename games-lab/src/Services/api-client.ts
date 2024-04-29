import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'd488bcb9797d4951bd0655076f50cf43'
    }
})