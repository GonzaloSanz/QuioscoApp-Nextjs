import { z } from 'zod';

export const OrderSchema = z.object({
    name: z.string()
        .min(1, 'Tu nombre es obligatorio'),
    total: z.number()
        .min(1, 'El pedido está vacío'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
});

export const SearchSchema = z.object({
    search: z.string()
        .trim()
        .min(1, { message: 'La búsqueda no es válida' })
});

export const ProductSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'El nombre no es válido' }),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value))
        .refine((value) => value > 0, { message: 'El precio no es válido' }),
    categoryId: z.string()
        .trim()
        .transform((value) => parseInt(value))
        .refine((value) => value > 0, { message: 'La categoría es obligatoria' })
        .or(z.number().min(1, { message: 'La categoría es obligatoria' })),
    image: z.string()
        .min(1, { message: 'La imagen es obligatoria' }),
});