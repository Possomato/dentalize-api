import { Router } from 'express'
import { DentistsController } from '../controllers/DentistsController'

const dentistsRoutes = Router()
const dentistsController = new DentistsController()

dentistsRoutes.post('/', dentistsController.create)
dentistsRoutes.get('/', dentistsController.index)
dentistsRoutes.get('/:id', dentistsController.show)
dentistsRoutes.put('/:id', dentistsController.update)
dentistsRoutes.delete('/:id', dentistsController.delete)

export {dentistsRoutes}