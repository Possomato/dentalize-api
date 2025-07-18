import { Router } from "express";

import { proceduresRoutes } from "./procedures.routes";

const routes = Router()

routes.use('/procedures', proceduresRoutes)

export {routes}