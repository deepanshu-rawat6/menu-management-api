import { z } from 'zod';

export const createItemSchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    base_amt: z.number(),
    discount: z.number(),
    tax: z.number().optional(),
}).refine(data => {
    if (data.tax_applicable) {
        return data.tax !== undefined;
    }
    return true;
}, {
    message: 'Tax is required when tax is applicable',
    path: ['tax']
})

export const updateItemSchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    base_amt: z.number(),
    discount: z.number(),
    tax: z.number().optional(),
}).refine(data => {
    if (data.tax_applicable) {
        return data.tax !== undefined;
    }
    return true;
}, {
    message: 'Tax is required when tax is applicable',
    path: ['tax']
});