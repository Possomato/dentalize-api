import { Router } from "express";

import { proceduresRoutes } from "./procedures.routes";
import { patientsRoutes } from "./patients.routes";
import { dentistsRoutes } from "./dentists.routes";
import { appointmentsRoutes } from "./appointments.routes";

const routes = Router()

routes.use('/procedures', proceduresRoutes)
routes.use('/patients', patientsRoutes)
routes.use('/dentists', dentistsRoutes)
routes.use('/appointments', appointmentsRoutes)

export {routes}