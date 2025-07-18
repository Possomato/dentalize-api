import { Router } from 'express'
import { PatientsController } from '../controllers/PatientsController'

const patientsRoutes = Router()
const patientsController = new PatientsController()

patientsRoutes.post('/', patientsController.create)
patientsRoutes.get('/', patientsController.index)
patientsRoutes.get('/:id', patientsController.show)
patientsRoutes.put('/:id', patientsController.update)
patientsRoutes.delete('/:id', patientsController.delete)

export {patientsRoutes}