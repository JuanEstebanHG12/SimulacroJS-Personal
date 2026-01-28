import { render } from "../core/render.js";
import { Login } from "../views/Login.js";


export function route() {
    const route = location.hash || "#/login"
    
    
    switch (route) {
        case '#/login':        
            render(Login())
            break;
    
        default:
            render(Login())
            break;
    }
}