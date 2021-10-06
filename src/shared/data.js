import { API } from "./config"
import axios from "axios"
const GetUsers = async function() {
    try {
        const responce = await axios.get(`/${API}/User.json`);
        const data = parseList(responce, 200);
        console.log(data)
        return data
    } catch (error) {
        console.log("Getting Data Error " + error)
    }
}
const parseList = function(responce, code) {
    if (responce.status != code) throw Error("Responce Status Error\n" + responce.status);
    if (!responce.data)
        return "No Data"
    return responce.data
}
export const Users = {
    GetUsers,
}