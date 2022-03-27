import { Request, Response } from 'express'

export const workflow = (req: Request, res: Response) => {

    res.json({
        "firstName": "string",
        "lastName": "string",
        "birthdate": "2022-03-27T19:52:36.911Z",
        "weight": 200,
        "height": 1,
        "identificationNumber": "ByTPNXTLII0P",
        "gender": "MALE",
        "diagnoseID": 1
    })
}