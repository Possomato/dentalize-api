import { Router } from 'express'
import { AppointmentsController } from '../controllers/AppointmentsController'

const appointmentsRoutes = Router()
const appointmentsController = new AppointmentsController()

appointmentsRoutes.post('/', appointmentsController.create)
appointmentsRoutes.get('/', appointmentsController.index)
appointmentsRoutes.get('/:id', appointmentsController.show)
appointmentsRoutes.put('/:id', appointmentsController.update)
appointmentsRoutes.delete('/:id', appointmentsController.delete)

export { appointmentsRoutes }
