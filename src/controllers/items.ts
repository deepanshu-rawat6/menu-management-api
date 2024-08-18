import { Request, Response } from 'express';
import logger from '../utils/logger';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '../utils/db';

interface ItemData {
    name: string;
    image: string;
    description: string;
    tax_applicable: boolean;
    category_id?: string;
    sub_category_id?: string;
    tax?: number;
    base_amt: number;
    discount: number;
    total_amt?: number;
}

export const createItemUnderCategory = async (req: Request, res: Response) => {
    try {
        const { name, image, description, tax_applicable, tax, base_amt, discount, total_amt } = req.body;

        const { category_id } = req.params;

        const existingItem = await prisma.item.findFirst({
            where: {
                name
            }
        })

        if (existingItem) {
            return res.status(StatusCodes.CONFLICT).json({
                message: 'Item already exists'
            });
        }

        const data: ItemData = {
            name,
            image,
            description,
            tax_applicable,
            category_id,
            base_amt,
            discount
        }

        if (tax_applicable) {
            data.tax = tax;
        }

        if (discount > 0) {
            data.total_amt = base_amt - discount;
        } else {
            data.total_amt = base_amt;
        }

        const item = await prisma.item.create({ data })

        if (item) {
            res.status(StatusCodes.OK).json({
                message: 'Item created successfully',
                data: item
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in creating item'
            });
        }

    } catch (err) {
        logger.info(`Error in creating item: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in creating item: ${err}`
        });
    }
}

export const createItemUnderSubCategory = async (req: Request, res: Response) => {
    try {
        const { name, image, description, tax_applicable, tax, base_amt, discount, total_amt } = req.body;

        const { sub_category_id } = req.params;

        const existingItem = await prisma.item.findFirst({
            where: {
                name
            }
        })

        if (existingItem) {
            return res.status(StatusCodes.CONFLICT).json({
                message: 'Item already exists'
            });
        }

        const data: ItemData = {
            name,
            image,
            description,
            tax_applicable,
            sub_category_id,
            base_amt,
            discount
        }

        if (tax_applicable) {
            data.tax = tax;
        }

        if (discount > 0) {
            data.total_amt = base_amt - discount;
        } else {
            data.total_amt = base_amt;
        }

        const item = await prisma.item.create({ data })

        if (item) {
            res.status(StatusCodes.OK).json({
                message: 'Item created successfully',
                data: item
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in creating item'
            });
        }

    } catch (err) {
        logger.info(`Error in creating item: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in creating item: ${err}`
        });
    }
}

export const updateItemUnderCategory = async (req: Request, res: Response) => {
    try {
        const { category_id, id } = req.params;
        const { name, image, description, tax_applicable, tax, base_amt, discount } = req.body;

        const existingItem = await prisma.item.findFirst({
            where: {
                id
            }
        })

        if (!existingItem) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: 'Item not found'
            });
        }

        const data: ItemData = {
            name,
            image,
            description,
            tax_applicable,
            category_id,
            base_amt,
            discount
        }

        if (tax_applicable) {
            data.tax = tax;
        }

        if (discount > 0) {
            data.total_amt = base_amt - discount;
        } else {
            data.total_amt = base_amt;
        }

        const item = await prisma.item.update({
            where: {
                id
            },
            data
        })

        if (item) {
            res.status(StatusCodes.OK).json({
                message: 'Item updated successfully',
                data: item
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in updating item'
            });
        }

    } catch (err) {
        logger.info(`Error in updating item: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in updating item: ${err}`
        });
    }
}

export const updateItemUnderSubCategory = async (req: Request, res: Response) => {
    try {
        const { sub_category_id, id } = req.params;
        const { name, image, description, tax_applicable, tax, base_amt, discount } = req.body;

        const existingItem = await prisma.item.findFirst({
            where: {
                id
            }
        })

        if (!existingItem) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: 'Item not found'
            });
        }

        const data: ItemData = {
            name,
            image,
            description,
            tax_applicable,
            sub_category_id,
            base_amt,
            discount
        }

        if (tax_applicable) {
            data.tax = tax;
        }

        if (discount > 0) {
            data.total_amt = base_amt - discount;
        } else {
            data.total_amt = base_amt;
        }

        const item = await prisma.item.update({
            where: {
                id
            },
            data
        })

        if (item) {
            res.status(StatusCodes.OK).json({
                message: 'Item updated successfully',
                data: item
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in updating item'
            });
        }

    } catch (err) {
        logger.info(`Error in updating item: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in updating item: ${err}`
        });
    }
}

export const getAllItems = async (req: Request, res: Response) => {
    try {
        const items = await prisma.item.findMany();

        res.status(StatusCodes.OK).json({
            message: 'Items fetched successfully',
            data: items
        });
    } catch (err) {
        logger.info(`Error in fetching items: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in fetching items: ${err}`
        });
    }
}

export const getItemByIdORName = async (req: Request, res: Response) => {
    try {
        const { id, name } = req.query;

        if (!id && !name) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Please provide either an ID or a name'
            });
        }

        const item = await prisma.item.findFirst({
            where: {
                OR: [
                    { id: String(id) },
                    { name: String(name) }
                ]
            }
        });

        if (item) {
            res.status(StatusCodes.OK).json({
                message: 'Fetched category successfully',
                data: item
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in fetching category'
            });
        }
    } catch (err) {
        logger.info(`Error in fetching category: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in fetching category: ${err}`
        });
    }
}

export const getItemsUnderCategory = async (req: Request, res: Response) => {
    try {
        const { category_id } = req.params;

        const items = await prisma.item.findMany({
            where: {
                categoryId: category_id
            }
        });

        res.status(StatusCodes.OK).json({
            message: 'Items fetched successfully',
            data: items
        });
    } catch (err) {
        logger.info(`Error in fetching items: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in fetching items: ${err}`
        });
    }
}

export const getItemsUnderSubCategory = async (req: Request, res: Response) => {
    try {
        const { sub_category_id } = req.params;

        const items = await prisma.item.findMany({
            where: {
                sub_CategoryId: sub_category_id
            }
        });

        res.status(StatusCodes.OK).json({
            message: 'Items fetched successfully',
            data: items
        });
    } catch (err) {
        logger.info(`Error in fetching items: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in fetching items: ${err}`
        });
    }
}