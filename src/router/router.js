 import { render } from "../core/render.js";
import { ManageOrders } from "../views/Admin/ManageOrders.js";
import { Login } from "../views/Login.js";
import { Dashboard } from "../views/User/Dasboard.js";
import { MyOrders } from "../views/User/MyOrders.js";

/*
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
} */
export async function router() {
  const hash = location.hash || '#/login'
  const route = hash.split('/')[1] || 'login'

  const user = JSON.parse(sessionStorage.getItem('user'))
  const role = user?.[0]?.role || null

  // 🔐 No logueado → solo login
  if (!role && route !== 'login') {
    location.hash = '#/login'
    return
  }

  // 🔄 Logueado intentando ir al login
  if (role && route === 'login') {
    location.hash = role === 'admin'
      ? '#/manage-orders'
      : '#/dashboard'
    return
  }
  const routes = {
  login: {
    view: Login,
    role: null
  },

  // USER
  dashboard: {
    view: Dashboard,
    role: 'user'
  },
  'recents-orders': {
    view: MyOrders,
    role: 'user'
  },

  // ADMIN
  'manage-orders': {
    view: ManageOrders,
    role: 'admin'
  }
}


  const routeConfig = routes[route]

  // 🚫 Ruta inexistente
  if (!routeConfig) {
    location.hash = role === 'admin'
      ? '#/manage-orders'
      : '#/dashboard'
    return
  }

  // ⛔ User entrando a ruta admin
  if (role === 'user' && routeConfig.role === 'admin') {
    location.hash = '#/dashboard'
    return
  }

  // ⛔ Admin entrando a ruta user
  if (role === 'admin' && routeConfig.role === 'user') {
    location.hash = '#/manage-orders'
    return
  }

  render(await routeConfig.view())
}
