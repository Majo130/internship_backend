import { Router } from 'express'
import PatientsRouter from '../api/v1/patients'

const router = Router()

export default () => {
    router.use('/patients', PatientsRouter())

    return router
}
