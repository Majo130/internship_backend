import { Router } from 'express'

import validationMiddleware from '../../../middlewares/validationMiddleware'
import * as GetPatients from './get.patients'
import * as PatchPatients from './patch.patients'
import * as DeletePatient from './delete.patients'
import * as GetOnePatient from './get.patients'
import * as PostPatient from './post.patients'

const router = Router()

export default () => {
    router.get('/patients/', validationMiddleware() , GetPatients.workflow)
    router.patch('/patients/{patientId}', validationMiddleware() , PatchPatients.workflow)
    router.delete('/patients/{patientId}', validationMiddleware() , DeletePatient.workflow)
    router.get('/patients/{patientId}', validationMiddleware() , GetOnePatient.workflow)
    router.post('/patients', validationMiddleware() , PostPatient.workflow)

    return router
}