import axios from "axios";

const URL_Link = 'https://62e0e322fa8ed271c4892fd1.mockapi.io/samplework';

//function ServiceData() {
function getDetails() {
    return axios.get(URL_Link);
}
function createDetails(name, profile) {
    return axios.post(URL_Link, { name, profile });
}
function updateDetails(value, name, profile) {
    return axios.put(URL_Link + '/' + value, { name, profile });
}
function deleteDetails(value) {
    return axios.delete(URL_Link + '/' + value)
}
function getDetailsId(value) {
    return axios.get(URL_Link + '/' + value)
}
///}
export const CONFIG = {
    getDetails: getDetails,
    createDetails: createDetails,
    updateDetails: updateDetails,
    deleteDetails: deleteDetails,
    getDetailsId: getDetailsId
}