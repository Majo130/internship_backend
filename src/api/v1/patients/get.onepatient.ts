import { Request, Response } from 'express'

export const workflow = (req: Request, res: Response) => {

    res.json({
        "patient": {
            "id": 1,
            "firstName": "string",
            "lastName": "string",
            "birthdate": "2022-03-27T19:48:25.220Z",
            "weight": 200,
            "height": 1,
            "identificationNumber": "hsOChsOChsOC",
            "gender": "MALE",
            "age": 0,
            "personType": "ADULT",
            "substanceAmount": 1,
            "diagnose": {
            "id": 1,
            "name": "string",
            "description": "string",
            "substance": {
                "id": 1,
                "name": "string",
                "timeUnit": "SECOND",
                "halfLife": 0
            }
            }
        }
    })
}