import { Router } from 'express'
import { ProceduresController } from '../controllers/ProceduresController'

const proceduresRoutes = Router()
const proceduresController = new ProceduresController()

proceduresRoutes.post('/', proceduresController.create)
proceduresRoutes.get('/', proceduresController.index)
proceduresRoutes.get('/:id', proceduresController.show)
proceduresRoutes.put('/:id', proceduresController.update)
proceduresRoutes.delete('/:id', proceduresController.delete)

export { proceduresRoutes }
