import {z} from "zod";

export const todoSchema = z.object({
    title: z.string(),
    completed: z.boolean(),
});

export const todoIdSchema = z.object({
    id : z.coerce.number().int().positive(),
});