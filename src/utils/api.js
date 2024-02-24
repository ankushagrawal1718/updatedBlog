import axios from "axios";
import { BASE_URL } from "../backendUrl";


export const fetchDataFromApi =async(url,method,params,data,token)=>{
    try{

        let options = {method,params,data}
        if (token) {
            options.headers = {
              Authorization: `Bearer ${token}`,
            };
        }

        const response = await axios(BASE_URL+url,options)
        return response.data;
    }catch(err){
        console.log(err);
        return err.response;
    }
}