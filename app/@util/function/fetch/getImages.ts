import axios from "axios";

export default async function getImages(){
    let getter = await axios.get('http://localhost:3000/api/get/images');
}