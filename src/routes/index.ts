import { Router } from "express";

import { proceduresRoutes } from "./procedures.routes";
import { patientsRoutes } from "./patients.routes";
import { dentistsRoutes } from "./dentists.routes";

const routes = Router()

routes.use('/procedures', proceduresRoutes)
routes.use('/patients', patientsRoutes)
routes.use('/dentists', dentistsRoutes)

export {routes}