import { Request, Response } from 'express'

export const workflow = (req: Request, res: Response) => {

    res.json({
        "firstName": "string",
        "lastName": "string",
        "birthdate": "2022-03-27T19:42:20.736Z",
        "weight": 200,
        "height": 1,
        "identificationNumber": "stringstring",
        "gender": "MALE",
        "diagnoseID": 1
    })
}