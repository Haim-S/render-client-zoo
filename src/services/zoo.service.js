import axios from 'axios';
import { getLocalStorageValue } from '../utils/localStorage.utils';
import picRandom from '../utils/picRandom';
const api = axios.create({
    baseURL: `https://my-zoo-server.onrender.com${"/animal"}`,
    headers: { 
    "Content-Type": "application/json",
    "access-token": getLocalStorageValue("ac_token")
},
});
 

const getAllAnimal = async ()=>{
    try {
        const response = await api.get("/all");
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}



const createOneAnimal = async (values) => {
    try {
        if(values.imgUrl === "") {
            values.imgUrl = picRandom;
        }
        const response = await api.post("/create", values);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
} 


const updateOneAnimal = async (
    id,
    name,
    type,
    age,
) =>{
    console.log(  id,
        name,
        type,
        age,
        );

    try {
        const response = await api.put(`/update/${id}`, {
            name : name,
            type: type,
            age: age,
        });
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const deleteOneAnimal = async (id) => {
    try {
        const response = await api.delete(`delete/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}


const crudService = {getAllAnimal, createOneAnimal ,updateOneAnimal, deleteOneAnimal};
export default crudService;
