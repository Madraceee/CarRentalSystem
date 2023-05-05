import { loginRoute } from "./public/LoginRoute.js";
import notFound from "./notFound.js";
import auth from "./private/auth.js";
import displayRoute from "./private/showProfileRoute.js";
import insertCarDetailsRoute from "./private/insertCarDetailsRoute.js"
import showCarDetailsRoute from "./public/showCarDetailsRoute.js"
import insertProfileRoute from "./public/insertProfileRoute.js"
import getUserCars from "./private/showUserCars.js"


const routes = {
    "login" : async (data,res)=>loginRoute(data,res),
    "showProfile": async (data,res) => displayRoute(data,res),
    "insertCar": async (data,res)=>insertCarDetailsRoute(data,res),
    "displayCar": async(data,res)=> showCarDetailsRoute(data,res),
    "insertProfile": async(data,res)=> insertProfileRoute(data,res),
    "getUserCars": async (data,res) => getUserCars(data,res),
    "notFound" :  (data,res)=>notFound(res)
}

export default routes;