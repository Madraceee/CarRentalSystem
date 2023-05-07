import { loginRoute } from "./public/LoginRoute.js";
import notFound from "./notFound.js";
import displayRoute from "./private/showProfileRoute.js";
import insertCarDetailsRoute from "./private/insertCarDetailsRoute.js"
import showCarDetailsRoute from "./public/showCarDetailsRoute.js"
import insertProfileRoute from "./public/insertProfileRoute.js"
import insertRideRoute from "./private/insertRideRoute.js";
import showRideRoute from "./private/showRideRoute.js"
import showAllRides from "./private/showAllRidesroute.js";
import showUserCars from "./private/showUserCars.js";
import getRidesFromID from "./private/getRideFromIDRoute.js"
import addExtend from "./private/addExtendRoute.js";
import viewExtend from "./private/viewExtendRoute.js";
import updateExtend from "./private/updateExtendRoute.js";
import endRide from "./private/endRideRoute.js";
import getNameImgFromID from "./public/getNameImgFromIDRoute.js";



const routes = {
    "login" : async (data,res)=>loginRoute(data,res),
    "showProfile": async (data,res) => displayRoute(data,res),   
    "insertProfile": async(data,res)=> insertProfileRoute(data,res),

    "insertCar": async (data,res)=>insertCarDetailsRoute(data,res),
    "getUserCars": async (data,res)=>showUserCars(data,res),
    "displayCar": async(data,res)=> showCarDetailsRoute(data,res),
    "getCarNameImg": async(data,res) => getNameImgFromID(data,res),

    "insertRide" : async(data,res) => insertRideRoute(data,res),
    "showRide" : async(data,res) => showRideRoute(data,res),
    "allRides" : async(data,res) => showAllRides(data,res),
    "rideFromID" : async(data,res) => getRidesFromID(data,res),
    "approveRide" : async(data,res) => approveRide(data,res),
    "endRide": async(data,res)=> endRide(data,res),

    "addExtend": async(data,res) => addExtend(data,res),
    "viewExtend": async(data,res) => viewExtend(data,res),
    "updateExtend" : async(data,res) => updateExtend(data,res),

    "notFound" :  (data,res)=>notFound(res)
    }

export default routes;