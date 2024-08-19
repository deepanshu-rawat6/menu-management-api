import { z } from 'zod';

export const createCategorySchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    tax: z.number().optional(),
    tax_type: z.string().optional()
}).refine(data => {
    if (data.tax_applicable) {
        return data.tax !== undefined && data.tax_type !== undefined;
    } else {
        return data.tax === undefined && data.tax_type === undefined;
    }
}, {
    message: 'Tax and tax type are required when tax is applicable, and vice versa',
    path: ['tax', 'tax_type']
})

export const updateCategorySchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    tax: z.number().optional(),
    tax_type: z.string().optional()
}).refine(data => {
    if (data.tax_applicable) {
        return data.tax !== undefined && data.tax_type !== undefined;
    } else {
        return data.tax === undefined && data.tax_type === undefined;
    }
}, {
    message: 'Tax and tax type are required when tax is applicable, and vice versa',
    path: ['tax', 'tax_type']
});