import { z } from "zod";

export const createSubCategorySchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    tax: z.number(),
})

export const updateSubCategorySchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    tax: z.number(),
})