// Importamos las funciones y vistas necesarias para el enrutamiento
import { render } from "../core/render.js";
import { ManageOrders } from "../views/Admin/ManageOrders.js";
import { Login } from "../views/Login.js";
import { Dashboard } from "../views/User/Dasboard.js";
import { MyOrders } from "../views/User/MyOrders.js";


// Función principal del router que maneja la navegación basada en el hash de la URL
export async function router() {
  // Obtenemos el hash actual de la URL, por defecto '#/login'
  const hash = location.hash || '#/login'
  // Extraemos la ruta del hash (parte después de '/')
  const route = hash.split('/')[1] || 'login'

  // Obtenemos el usuario del sessionStorage y su rol
  const user = JSON.parse(sessionStorage.getItem('user'))
  const role = user?.[0]?.role || null

  // 🔐 Si no hay rol (no logueado) y la ruta no es login, redirigir a login
  if (!role && route !== 'login') {
    location.hash = '#/login'
    return
  }

  // 🔄 Si hay rol (logueado) y está intentando ir a login, redirigir según rol
  if (role && route === 'login') {
    location.hash = role === 'admin'
      ? '#/manage-orders'
      : '#/dashboard'
    return
  }

  // Definimos las rutas disponibles con sus vistas y roles permitidos
  const routes = {
  login: {
    view: Login,
    role: null  // Acceso público
  },

  // Rutas para usuarios normales
  dashboard: {
    view: Dashboard,
    role: 'user'
  },
  'recents-orders': {
    view: MyOrders,
    role: 'user'
  },

  // Rutas para administradores
  'manage-orders': {
    view: ManageOrders,
    role: 'admin'
  }
}

  // Obtenemos la configuración de la ruta actual
  const routeConfig = routes[route]

  // 🚫 Si la ruta no existe, redirigir a la ruta por defecto según rol
  if (!routeConfig) {
    location.hash = role === 'admin'
      ? '#/manage-orders'
      : '#/dashboard'
    return
  }

  // ⛔ Si un usuario normal intenta acceder a una ruta de admin, redirigir a dashboard
  if (role === 'user' && routeConfig.role === 'admin') {
    location.hash = '#/dashboard'
    return
  }

  // ⛔ Si un admin intenta acceder a una ruta de usuario, redirigir a manage-orders
  if (role === 'admin' && routeConfig.role === 'user') {
    location.hash = '#/manage-orders'
    return
  }

  // Renderizamos la vista correspondiente
  render(await routeConfig.view())
}
