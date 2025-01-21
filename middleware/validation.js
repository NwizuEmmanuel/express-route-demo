import { ZodError } from "zod";

export const validate = (schemas) => {
    return (req, res, next) => {
        for (const [key, schema] of Object.entries(schemas)){
            try{
                const result = schema.parse(req[key]);
                req[key] = result;
                next();
            }catch(err){
                if (err instanceof ZodError){
                    return res.status(400).json({error: "invalid data", details: err});
                }
                return res.status(500).json({error: "Internal Server Error."});
            }
        }
    }
}

