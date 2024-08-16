import { z } from 'zod';

export const createItemSchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    tax: z.number(),
    base_amt: z.number(),
    discount: z.number(),
    total_amt: z.number(),
})

export const updateItemSchema = z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    tax_applicable: z.boolean(),
    tax: z.number(),
    base_amt: z.number(),
    discount: z.number(),
    total_amt: z.number(),
})