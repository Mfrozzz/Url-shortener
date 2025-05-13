import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export default class ValidateRequest {
    public validate(schema: ObjectSchema){
        return (req: Request, res: Response, next: NextFunction) => {
            const { error } = schema.validate(req.body, { abortEarly: false });
            if (error) {
                return res.status(400).json({
                    status: "error",
                    message: error.details.map((err) => err.message).join(", "),
                }) as any;
            }
            next();
        }
    }
}