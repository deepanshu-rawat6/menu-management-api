import { z } from "zod";

export const createSubCategorySchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    tax: z.number().optional(),
}).refine(data => {
    if (data.tax_applicable) {
        return data.tax !== undefined;
    } else {
        return data.tax === undefined;
    }
}, {
    message: 'Tax is required when tax is applicable, and vice versa',
    path: ['tax']
})

export const updateSubCategorySchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    tax: z.number().optional(),
}).refine(data => {
    if (data.tax_applicable) {
        return data.tax !== undefined;
    } else {
        return data.tax === undefined
    }
}, {
    message: 'Tax is required when tax is applicable, and vice versa',
    path: ['tax']
});