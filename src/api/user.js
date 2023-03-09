import axios from './axios.config'


export const getUsers = async () => {
    let response = await axios.get('/users');
    return response;
}
export const deleteUser = () => { }
export const createUser = () => { }
export const updateUser = () => { }