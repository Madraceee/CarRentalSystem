import { loginRoute } from "./LoginRoute.js";
import notFound from "./notFound.js";

const publicRoutes = {
    "login" : async (data,res)=>loginRoute(data,res),
    "notFound" :  (data,res)=>notFound(res)
}

export default publicRoutes;