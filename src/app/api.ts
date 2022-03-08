import Config from "react-native-config";
import axios from "axios";

const accessToken = Config.API_TOKEN;
const baseUrl = Config.API_URL;
const headers = {
    Authorization: "Bearer " + accessToken,
    "Content-Type": "application/json"
}

export const callAPI = async ({ url, method, data }:{url:string, method:string, data:any}) => {
    return await axios({method: method, url: baseUrl+url, headers: headers, data:data})
};