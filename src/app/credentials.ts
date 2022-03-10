


import Config from "react-native-config";
import axios from 'axios';
import qs from 'qs';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const baseUrl = Config.API_URL;
const getAccessToken = async () => {
    const currentDateTime = new Date();
    try {
        const expireAt = await AsyncStorage.getItem('@expiresAt');
        if(expireAt !== null && currentDateTime < new Date(expireAt)) {
            return await AsyncStorage.getItem('@accessToken');
        } else {
            const response = await getToken();
            if(response.status == 200) {
                const expiresAt =  new Date(currentDateTime.getTime() + response.data.expires_in * 1000);
                const responseData = response.data;
                await AsyncStorage.setItem('@accessToken', responseData.access_token)
                await AsyncStorage.setItem('@expiresAt', expiresAt.toString())
                await AsyncStorage.setItem('@refreshToken', responseData.refresh_token)
                await AsyncStorage.setItem('@scope', responseData.scope)
                return responseData.access_token;
            }
        }
      } catch(e) {
        console.log("error:", e);
      }
}

const getToken = async () => {
    const clientId = Config.CLIENT_ID;
    const clientSecret = Config.CLIENT_SECRET;
    const userName = Config.USER_NAME;
    const password = Config.PASSWORD;
    const data = {
        "client_id": clientId,
        "client_secret": clientSecret,
        "grant_type": "password",
        "username": userName,
        "password": password,
        "scope": "read",
    }
    const dataString = qs.stringify(data);
    const dataLength = dataString.length;
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': dataLength
         },
        data: qs.stringify(data),
        url: baseUrl+"/public/token",
    };
    const response  = await axios(options);
    return response;
}

export default getAccessToken;