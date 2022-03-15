import Config from "react-native-config";
import axios from "axios";
import getAccessToken from "./credentials";

const baseUrl = Config.API_URL;
export const callAPI = async ({ url, method, data }:{url:string, method:string, data:any}) => {
    const accessToken = await getAccessToken();
    const headers = {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json"
    }
    console.log("URL: ", baseUrl + url);
    return await axios({method: method, url: baseUrl+url, headers: headers, data:data})
};