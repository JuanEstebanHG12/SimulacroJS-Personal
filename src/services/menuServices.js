import { API } from "../utils/utils.js";

export async function getMenuItems(){
    try {
        const response = await fetch(`${API.BASE_API}/${API.MENU}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}