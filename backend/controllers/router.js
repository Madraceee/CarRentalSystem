import { loginRoute } from "./public/LoginRoute.js";
import notFound from "./notFound.js";
import displayRoute from "./private/showProfileRoute.js";
import insertCarDetailsRoute from "./private/insertCarDetailsRoute.js"
import showCarDetailsRoute from "./public/showCarDetailsRoute.js"
import insertProfileRoute from "./public/insertProfileRoute.js"
import insertRideRoute from "./private/insertRideRoute.js";
import showRideRoute from "./private/showRideRoute.js"


const routes = {
    "login" : async (data,res)=>loginRoute(data,res),
    "showProfile": async (data,res) => displayRoute(data,res),
    "notFound" :  (data,res)=>notFound(res),
    "insertCar": async (data,res)=>insertCarDetailsRoute(data,res),
    "displayCar": async(data,res)=> showCarDetailsRoute(data,res),
    "insertProfile": async(data,res)=> insertProfileRoute(data,res),
    "insertRide" : async(data,res) => insertRideRoute(data,res),
    "showRide" : async(data,res) => showRideRoute(data,res)
    }

export default routes;