import { render } from "../core/render.js";
import { Login } from "../views/Login.js";
import { Dashboard } from "../views/User/Dasboard.js";
import { MyOrders } from "../views/User/MyOrders.js";


export async function router() {
    const hash = location.hash || "#/login"
    const [ , route , param] = hash.split('/')
    const user = sessionStorage.getItem('user')

    if(user && route == 'login' || route == '') location.hash = '#/dashboard' //si user existe e intenta navegar al login o esta en una ruta sin has, redirigue al dashboard
    if(!user && route!= 'login' || route == '') location.hash = '#/login' //si user no existe y está en alguna ruta diferente al login o sin hash, redirecciona al login

    const routes = {
        'login' : Login,
        'dashboard' : Dashboard,
        'recents-orders' : MyOrders
    }
    //renderizar segun rutas
    const renderView = routes[route]

    render(await renderView())
}