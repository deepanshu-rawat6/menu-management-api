import { Request, Response } from 'express';
import logger from '../utils/logger';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '../utils/db';

interface SubCategoryData {
    name: string;
    image: string;
    description: string;
    tax_applicable: boolean;
    category_id: string;
    tax?: number;
}

export const createSubCategory = async (req: Request, res: Response) => {
    try {
        const { name, image, description, tax_applicable, tax } = req.body;

        const { category_id } = req.params;

        const existingSubCategory = await prisma.sub_Category.findFirst({
            where: {
                name
            }
        })

        if (existingSubCategory) {
            return res.status(StatusCodes.CONFLICT).json({
                message: 'Sub-Category already exists'
            });
        }

        const data: SubCategoryData = {
            name,
            image,
            description,
            category_id,
            tax_applicable,
        }

        if (tax_applicable) {
            data.tax = tax;
        }

        const subCategory = await prisma.sub_Category.create({ data })

        if (subCategory) {
            res.status(StatusCodes.OK).json({
                message: 'Sub-Category created successfully',
                data: subCategory
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in creating sub-category'
            });
        }

    } catch (err) {
        logger.info(`Error in creating sub-category: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in creating sub-category: ${err}`
        });
    }
}

export const updateSubCategory = async (req: Request, res: Response) => {
    try {
        const { category_id, id } = req.params;
        const { name, image, description, tax_applicable, tax } = req.body;

        const existingSubCategory = await prisma.category.findFirst({
            where: {
                id
            }
        })

        if (!existingSubCategory) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: 'Sub-Category not found'
            });
        }

        const data: SubCategoryData = {
            name,
            image,
            description,
            category_id,
            tax_applicable,
        }

        if (tax_applicable) {
            data.tax = tax;
        }

        const updatedSubCategory = await prisma.sub_Category.update({
            where: {
                id: id
            },
            data
        });


        if (updatedSubCategory) {
            res.status(StatusCodes.OK).json({
                message: 'Sub-Category updated successfully',
                data: updateSubCategory
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in updating sub-category'
            });
        }

    } catch (err) {
        logger.info(`Error in updating sub-category: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in updating sub-category: ${err}`
        });
    }
}

export const getAllSubCategories = async (req: Request, res: Response) => {
    try {
        const subCategories = await prisma.sub_Category.findMany();

        res.status(StatusCodes.OK).json({
            message: 'Fetched all sub-categories successfully',
            data: subCategories
        })

    } catch (err) {
        logger.info(`Error in fetching categories: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in fetching sub-categories: ${err}`
        });
    }
}

export const getSubCategoryByIdORName = async (req: Request, res: Response) => {
    try {
        const { id, name } = req.query;

        if (!id && !name) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Please provide either an ID or a name'
            });
        }

        const subCategory = await prisma.sub_Category.findFirst({
            where: {
                OR: [
                    { id: String(id) },
                    { name: String(name) }
                ]
            }
        });

        if (subCategory) {
            res.status(StatusCodes.OK).json({
                message: 'Fetched category successfully',
                data: subCategory
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

export const getSubCategoriesByCategory = async (req: Request, res: Response) => {
    try {
        const { category_id } = req.params;

        const subCategories = await prisma.sub_Category.findMany({
            where: {
                category_id
            }
        });

        if (subCategories) {
            res.status(StatusCodes.OK).json({
                message: 'Fetched all sub-categories successfully',
                data: subCategories
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error in fetching sub-categories'
            });
        }
    } catch (err) {
        logger.info(`Error in fetching sub-categories: ${err}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error in fetching sub-categories: ${err}`
        });
    }
}