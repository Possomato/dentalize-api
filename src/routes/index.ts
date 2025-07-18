import { Router } from "express";

import { proceduresRoutes } from "./procedures.routes";
import { patientsRoutes } from "./patients.routes";

const routes = Router()

routes.use('/procedures', proceduresRoutes)
routes.use('/patients', patientsRoutes)

export {routes}