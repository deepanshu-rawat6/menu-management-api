import express, { Request, Response } from 'express';
import logger from '../utils/logger';
import { StatusCodes } from 'http-status-codes';
import { validateData } from '../middlewares';
import { createCategorySchema, updateCategorySchema } from '../schemas';
import { createCategory, getAllCategories, getCategoryByIdORName, updateCategory } from '../controllers';

export default (router: express.Router) => {
    /**
     * @openapi
     * '/api/v1/categories':
     *   post:
     *     tags:
     *       - Category
     *     summary: Create a new category
     *     description: Create a category with the given details
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: The name of the category
     *                 example: "Electronics"
     *               image:
     *                 type: string
     *                 format: url
     *                 description: The image URL of the category
     *                 example: "https://example.com/image.jpg"
     *               description:
     *                 type: string
     *                 description: The description of the category
     *                 example: "Category for all electronic items"
     *               tax_applicable:
     *                 type: boolean
     *                 description: The tax applicable status of the category
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage of the category
     *                 example: 18
     *               tax_type:
     *                 type: string
     *                 description: The tax type of the category
     *                 example: "GST"
     *     responses:
     *       200:
     *         description: Category data fetched successfully
     *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The success message
 *                   example: "Category created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The unique identifier of the category
 *                       example: "12345"
 *                     name:
 *                       type: string
 *                       description: The name of the category
 *                       example: "Electronics"
 *                     image:
 *                       type: string
 *                       format: url
 *                       description: The image URL of the category
 *                       example: "https://example.com/image.jpg"
 *                     description:
 *                       type: string
 *                       description: The description of the category
 *                       example: "Category for all electronic items"
 *                     tax_applicable:
 *                       type: boolean
 *                       description: Whether the category is subject to tax
 *                       example: true
 *                     tax:
 *                       type: number
 *                       description: The tax percentage applicable to the category
 *                       example: 18
 *                     tax_type:
 *                       type: string
 *                       description: The type of tax applicable
 *                       example: "GST"
     *       400:
     *         description: Bad request, some details are missing or invalid
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "name is missing"
     *       409:
     *         description: Conflict, failed to create category, category already exists
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Category already exists"
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Internal server error"
     */
    router.post('/api/v1/categories', validateData(createCategorySchema), createCategory, (req: Request, res: Response) => {
        logger.info('POST /api/v1/categories');
        res.status(StatusCodes.OK).send({
            message: "POST /api/v1/categories"
        });
    });

    /**
     * @openapi
     * '/api/v1/categories/{id}':
     *   get:
     *     tags:
     *       - Category
     *     summary: Retrieve a category by ID or name
     *     description: This endpoint allows you to fetch a single category by either its ID or name.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the category to retrieve
     *         example: "12345"
     *       - in: query
     *         name: name
     *         required: false
     *         schema:
     *           type: string
     *         description: The name of the category to retrieve
     *         example: "Electronics"
     *     responses:
     *       200:
     *         description: Category data fetched successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: string
     *                   description: The unique identifier of the category
     *                   example: "12345"
     *                 name:
     *                   type: string
     *                   description: The name of the category
     *                   example: "Electronics"
     *                 image:
     *                   type: string
     *                   format: url
     *                   description: The image URL of the category
     *                   example: "https://example.com/image.jpg"
     *                 description:
     *                   type: string
     *                   description: The description of the category
     *                   example: "Category for all electronic items"
     *                 tax_applicable:
     *                   type: boolean
     *                   description: Whether the category is subject to tax
     *                   example: true
     *                 tax:
     *                   type: number
     *                   description: The tax percentage applicable to the category
     *                   example: 18
     *                 tax_type:
     *                   type: string
     *                   description: The type of tax applicable
     *                   example: "GST"
     *       400:
     *         description: Bad request, id or name not provided
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Please provide either an ID or a name"
     *       404:
     *         description: Category not found
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Category not found"
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Internal server error"
     */
    router.get('/api/v1/categories/:id', getCategoryByIdORName, (req: Request, res: Response) => {
        logger.info('GET /api/v1/categories/:id');
        res.status(StatusCodes.OK).send({
            message: "GET /api/v1/categories/:id"
        });
    });

    /**
     * @openapi
     * '/api/v1/categories/all':
     *   get:
     *     tags:
     *       - Category
     *     summary: Retrieve all categories
     *     description: This endpoint fetches all categories available in the system.
     *     responses:
     *       200:
     *         description: Categories data fetched successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: string
     *                     description: The unique identifier of the category
     *                     example: "12345"
     *                   name:
     *                     type: string
     *                     description: The name of the category
     *                     example: "Electronics"
     *                   image:
     *                     type: string
     *                     format: url
     *                     description: The image URL of the category
     *                     example: "https://example.com/image.jpg"
     *                   description:
     *                     type: string
     *                     description: The description of the category
     *                     example: "Category for all electronic items"
     *                   tax_applicable:
     *                     type: boolean
     *                     description: Whether the category is subject to tax
     *                     example: true
     *                   tax:
     *                     type: number
     *                     description: The tax percentage applicable to the category
     *                     example: 18
     *                   tax_type:
     *                     type: string
     *                     description: The type of tax applicable
     *                     example: "GST"
     *       500:
     *         description: Internal server error
     */
    router.get('/api/v1/categories/all', getAllCategories, (req: Request, res: Response) => {
        logger.info('GET /api/v1/catgories/all');
        res.status(StatusCodes.OK).send({
            message: "GET /api/v1/categories/all"
        });
    });


    /**
     * @openapi
     * '/api/v1/categories/:id':
     *   patch:
     *     tags:
     *       - Category
     *     summary: Update a category by ID
     *     description: Update a category with the given details by ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the category to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: The name of the category
     *                 example: "Electronics"
     *               image:
     *                 type: string
     *                 format: url
     *                 description: The image URL of the category
     *                 example: "https://example.com/image.jpg"
     *               description:
     *                 type: string
     *                 description: The description of the category
     *                 example: "Category for all electronic items"
     *               tax_applicable:
     *                 type: boolean
     *                 description: The tax applicable status of the category
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage of the category
     *                 example: 18
     *               tax_type:
     *                 type: string
     *                 description: The tax type of the category
     *                 example: "GST"
     *     responses:
     *       200:
     *         description: Updated the category successfully
     *       400:
     *         description: Bad request, invalid data or missing id
     *       404:
     *         description: Category not found
     *       500:
     *         description: Internal server error
     */
    router.patch('/api/v1/categories/:id', validateData(updateCategorySchema), updateCategory, (req: Request, res: Response) => {
        logger.info('PATCH /api/v1/categories/:id');
        res.status(StatusCodes.OK).send({
            message: "PATCH /api/v1/categories/:id"
        });
    });

}