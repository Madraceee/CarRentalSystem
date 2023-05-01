import { loginRoute } from "./public/LoginRoute.js";
import notFound from "./notFound.js";
import auth from "./private/auth.js";

const routes = {
    "login" : async (data,res)=>loginRoute(data,res),
    "notFound" :  (data,res)=>notFound(res),
    "auth": async (data,res)=>auth(data,res)
}

export default routes;