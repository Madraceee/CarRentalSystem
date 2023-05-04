import { loginRoute } from "./public/LoginRoute.js";
import notFound from "./notFound.js";
import auth from "./private/auth.js";
import displayRoute from "./private/showProfileRoute.js";
import insertCarDetailsRoute from "./private/insertCarDetailsRoute.js"
import showCarDetailsRoute from "./private/showCarDetailsRoute.js"
import insertProfileRoute from "./private/insertProfileRoute.js"


const routes = {
    "login" : async (data,res)=>loginRoute(data,res),
    "showProfile": async (data,res) => displayRoute(data,res),
    "notFound" :  (data,res)=>notFound(res),
    "insertCar": async (data,res)=>insertCarDetailsRoute(data,res),
    "displayCar": async(data,res)=> showCarDetailsRoute(data,res),
    "insertProfile": async(data,res)=> insertProfileRoute(data,res)
}

export default routes;