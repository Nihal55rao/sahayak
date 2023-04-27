import { myAxios } from "./helper";

const register=(hospital)=>{
    return myAxios.post('http://192.168.29.50:8080/hospital').then((response)=> response.json())
}