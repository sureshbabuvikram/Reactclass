import axios from "axios";
import { fetchData, loading } from "./mockSlice"

export const mockAction=()=>async(dispatch)=>{

    dispatch(loading())

    try {
        const response= await axios.get("http://jsonplaceholder.typicode.com/users")
        dispatch(fetchData(response.data))
        
    } catch (error) {
        console.log(error);
    }
}