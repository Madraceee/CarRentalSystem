import { loginRoute } from "./LoginRoute.js"

const publicRoutes = {
    "login" : async (data,res)=>loginRoute(data,res)
}

export default publicRoutes;