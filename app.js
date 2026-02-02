// Importamos la función router desde el módulo de enrutamiento
import { router } from './src/router/router.js'

// Agregamos un listener para el evento 'hashchange' que se dispara cuando cambia el hash de la URL
// Esto permite manejar la navegación basada en el hash
window.addEventListener('hashchange', router)

// Agregamos un listener para el evento 'load' que se dispara cuando la página se carga inicialmente
// Esto asegura que el enrutamiento se ejecute al cargar la aplicación
window.addEventListener('load', router)
