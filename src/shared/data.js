import { API } from "./config"
import axios from "axios"
const GetUsers = async function() {
    try {
        const responce = await axios.get(`${API}/User.json`);
        const data = parseList(responce, 200);
        return data
    } catch (error) {
        console.log("Getting Data Error " + error)
    }
}
const UpdateUser = async function(user) {
    try {
        const responce = await axios.put(`${API}/User.json/${user.id}`, user);
        const data = parseList(responce, 200);
        return data
    } catch (error) {
        console.log("Updating Data Error " + error)
    }
}
const AddUser = async function(user) {
    try {
        const responce = await axios.post(`${API}/User.json`, user);
        const data = parseList(responce, 201);
        return data
    } catch (error) {
        console.log("Adding Data Error " + error)
    }
}
const MaxId = async function() {
    try {
        const responce = await axios.get(`${API}/User.json`);
        const data = parseList(responce, 200);
        const maxid = getMaxOfJson(data, data.id)
            // return maxid
        console.log(maxid)
    } catch (err) {
        console.error("Getting Max Id error" + err);
    }
}

function getMaxOfJson(dta, id) {
    var max = null;
    for (var i = 0; i < dta.length; i++) {
        if (max == null) {
            max = dta[i][id];
        } else {
            if (parseFloat(dta[i][id]) > max) {

                max = dta[i][id];

            }
        }
        console.log(max)
    }
    return max;
}
const DeleteUser = async function(user) {
    try {
        const responce = await axios.post(`${API}/User.json/${user.id}`);
        parseList(responce, 200);
        return newArray
    } catch (error) {
        console.log("Deleting Data Error " + error)
    }
}
const getUserbyId = async function(id) {
    try {

        const responce = await axios.get(`${API}/User.json/${id}`);
        parseList(responce, 200);
    } catch (err) {
        console.error("Data get By Id Error " + err);
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
    AddUser,
    DeleteUser,
    UpdateUser,
    getUserbyId,
    MaxId
}