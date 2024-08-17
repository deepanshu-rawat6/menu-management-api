import { Request, Response } from 'express';
import logger from '../utils/logger';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '../utils/db';

interface CategoryData {
    name: string;
    image: string;
    description: string;
    tax_applicable: boolean;
    tax?: number;
    tax_type?: string;
}

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, image, description, tax_applicable, tax, tax_type } = req.body;

        const existingCategory = await prisma.category.findFirst({
            where: {
                name
            }
        })

        if (existingCategory) {
            return res.status(StatusCodes.CONFLICT).json({
                message: 'Category already exists'
            });
        }

        const data: CategoryData = {
            name,
            image,
            description,
            tax_applicable,
        }

        if (tax_applicable) {
            data.tax = tax;
            data.tax_type = tax_type;
        }

        const category = await prisma.category.create({ data })

        if (category) {
            res.status(StatusCodes.OK).json({
                message: 'Category created successfully',
                data: category
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in creating category'
            });
        }

    } catch (err) {
        logger.info(`Error in creating category: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in creating category: ${err}`
        });
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, image, description, tax_applicable, tax, tax_type } = req.body;

        const existingCategory = await prisma.category.findFirst({
            where: {
                id
            }
        })

        if (!existingCategory) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: 'Category does not exist'
            });
        }

        const data: CategoryData = {
            name,
            image,
            description,
            tax_applicable,
        }

        if (tax_applicable) {
            data.tax = tax;
            data.tax_type = tax_type;
        }

        const updatedCategory = await prisma.category.update({
            where: {
                id: id
            },
            data
        })

        if (updatedCategory) {
            res.status(StatusCodes.OK).json({
                message: 'Category updated successfully',
                data: updateCategory
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in updating category'
            });
        }

    } catch (err) {
        logger.info(`Error in updating category: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in updating category: ${err}`
        });
    }
}

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany();

        if (categories) {
            res.status(StatusCodes.OK).json({
                message: 'Fetched all categories successfully',
                data: categories
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in fetching categories'
            });
        }
    } catch (err) {
        logger.info(`Error in fetching categories: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in fetching categories: ${err}`
        });
    }
}

export const getCategoryByIdORName = async (req: Request, res: Response) => {
    try {
        const { id, name } = req.query;

        if (!id && !name) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Please provide either an ID or a name'
            });
        }

        const category = await prisma.category.findFirst({
            where: {
                OR: [
                    { id: String(id) },
                    { name: String(name) }
                ]
            }
        });

        if (category) {
            res.status(StatusCodes.OK).json({
                message: 'Fetched category successfully',
                data: category
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