import express, { Request, Response } from 'express';
import logger from '../utils/logger';
import { StatusCodes } from 'http-status-codes';
import { validateData } from '../middlewares';
import { createItemSchema, updateItemSchema } from '../schemas';
import { createItemUnderCategory, createItemUnderSubCategory, updateItemUnderCategory, updateItemUnderSubCategory, getAllItems, getItemByIdORName, getItemsUnderCategory, getItemsUnderSubCategory } from 'controllers';


export default (router: express.Router) => {
    /**
     * @openapi
     * '/api/v1/categories/{category_id}/sub-categories':
     *   post:
     *     tags:
     *       - Sub-Category
     *     summary: Create a new sub-category
     *     description: Create a sub-category with the given details under a specific category
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the category to which the sub-category belongs
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: The name of the sub-category
     *                 example: "Mobile Phones"
     *               image:
     *                 type: string
     *                 format: url
     *                 description: The image URL of the sub-category
     *                 example: "https://example.com/mobile.jpg"
     *               description:
     *                 type: string
     *                 description: The description of the sub-category
     *                 example: "Sub-category for mobile phones"
     *               tax_applicable:
     *                 type: boolean
     *                 description: Whether the sub-category is subject to tax
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage of the sub-category
     *                 example: 18
     *     responses:
     *       200:
     *         description: Sub-Category created successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: The success message
     *                   example: "Sub-Category created successfully"
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       description: The unique identifier of the sub-category
     *                       example: "67890"
     *                     name:
     *                       type: string
     *                       description: The name of the sub-category
     *                       example: "Mobile Phones"
     *                     image:
     *                       type: string
     *                       format: url
     *                       description: The image URL of the sub-category
     *                       example: "https://example.com/mobile.jpg"
     *                     description:
     *                       type: string
     *                       description: The description of the sub-category
     *                       example: "Sub-category for mobile phones"
     *                     tax_applicable:
     *                       type: boolean
     *                       description: Whether the sub-category is subject to tax
     *                       example: true
     *                     tax:
     *                       type: number
     *                       description: The tax percentage applicable to the sub-category
     *                       example: 18
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
     *         description: Conflict, failed to create sub-category, sub-category already exists
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Sub-Category already exists"
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
    router.post('/api/v1/categories/:category_id/items', validateData(createItemSchema), createItemUnderCategory, (req: Request, res: Response) => {
        logger.info('POST /api/v1/categories/:category_id/items');
        res.status(StatusCodes.OK).send({
            message: "POST /api/v1/categories/:category_id/items"
        });
    });

    /**
     * @openapi
     * '/api/v1/categories/{category_id}/sub-categories':
     *   post:
     *     tags:
     *       - Sub-Category
     *     summary: Create a new sub-category
     *     description: Create a sub-category with the given details under a specific category
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the category to which the sub-category belongs
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: The name of the sub-category
     *                 example: "Mobile Phones"
     *               image:
     *                 type: string
     *                 format: url
     *                 description: The image URL of the sub-category
     *                 example: "https://example.com/mobile.jpg"
     *               description:
     *                 type: string
     *                 description: The description of the sub-category
     *                 example: "Sub-category for mobile phones"
     *               tax_applicable:
     *                 type: boolean
     *                 description: Whether the sub-category is subject to tax
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage of the sub-category
     *                 example: 18
     *     responses:
     *       200:
     *         description: Sub-Category created successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: The success message
     *                   example: "Sub-Category created successfully"
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       description: The unique identifier of the sub-category
     *                       example: "67890"
     *                     name:
     *                       type: string
     *                       description: The name of the sub-category
     *                       example: "Mobile Phones"
     *                     image:
     *                       type: string
     *                       format: url
     *                       description: The image URL of the sub-category
     *                       example: "https://example.com/mobile.jpg"
     *                     description:
     *                       type: string
     *                       description: The description of the sub-category
     *                       example: "Sub-category for mobile phones"
     *                     tax_applicable:
     *                       type: boolean
     *                       description: Whether the sub-category is subject to tax
     *                       example: true
     *                     tax:
     *                       type: number
     *                       description: The tax percentage applicable to the sub-category
     *                       example: 18
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
     *         description: Conflict, failed to create sub-category, sub-category already exists
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Sub-Category already exists"
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
    router.post('/api/v1/sub_categories/:sub_category_id/items', validateData(createItemSchema), createItemUnderSubCategory, (req: Request, res: Response) => {
        logger.info('POST /api/v1/sub_categories/:sub_category_id/items');
        res.status(StatusCodes.OK).send({
            message: "POST /api/v1/sub_categories/:sub_category_id/items"
        });
    });

    /**
     * @openapi
     * '/api/v1/sub-categories':
     *   get:
     *     tags:
     *       - Sub-Category
     *     summary: Retrieve a sub-category by ID or name
     *     description: This endpoint allows you to fetch a single sub-category by either its ID or name.
     *     parameters:
     *       - in: query
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to retrieve
     *         example: "12345"
     *       - in: query
     *         name: name
     *         required: false
     *         schema:
     *           type: string
     *         description: The name of the sub-category to retrieve
     *         example: "Electronics"
     *     responses:
     *       200:
     *         description: Sub-Category data fetched successfully
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
     *                 category_id:
     *                   type: string
     *                   description: The ID of the category to which the sub-category belongs
     *                   example: "12345"
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
     *         description: Sub-Category not found
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
    router.get('/api/v1/items', getItemByIdORName, (req: Request, res: Response) => {
        logger.info('GET /api/v1/items');
        res.status(StatusCodes.OK).send({
            message: "GET /api/v1/items"
        });
    });

    /**
     * @openapi
     * '/api/v1/sub-categories/all':
     *   get:
     *     tags:
     *       - Sub-Category
     *     summary: Retrieve all sub-categories
     *     description: This endpoint fetches all sub-categories available in the system.
     *     responses:
     *       200:
     *         description: Fetched all sub-categories successfully
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
     *                   category_id:
     *                     type: string
     *                     description: The ID of the category to which the sub-category belongs
     *                     example: "12345"
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
    router.get('/api/v1/items/all', getAllItems, (req: Request, res: Response) => {
        logger.info('GET /api/v1/items/all');
        res.status(StatusCodes.OK).send({
            message: "GET /api/v1/items/all"
        });
    });

    /**
     * @openapi
     * '/api/v1/categories/{category_id}/sub-categories':
     *   get:
     *     tags:
     *       - Sub-Category
     *     summary: Retrieve all sub-categories by category
     *     description: This endpoint fetches all sub-categories belonging to a specific category.
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to which the sub-category belongs
     *     responses:
     *       200:
     *         description: Fetched all sub-categories successfully
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
     *                   category_id:
     *                     type: string
     *                     description: The ID of the category to which the sub-category belongs
     *                     example: "12345"
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
    router.get('/api/v1/categories/:category_id/items', getItemsUnderCategory, (req: Request, res: Response) => {
        logger.info('GET /api/v1/categories/:/category_id/items');
        res.status(StatusCodes.OK).send({
            message: "GET /api/v1/categories/:category_id/items"
        });
    });

    /**
     * @openapi
     * '/api/v1/categories/{category_id}/sub-categories':
     *   get:
     *     tags:
     *       - Sub-Category
     *     summary: Retrieve all sub-categories by category
     *     description: This endpoint fetches all sub-categories belonging to a specific category.
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to which the sub-category belongs
     *     responses:
     *       200:
     *         description: Fetched all sub-categories successfully
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
     *                   category_id:
     *                     type: string
     *                     description: The ID of the category to which the sub-category belongs
     *                     example: "12345"
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
    router.get('/api/v1/sub_categories/:sub_category_id/items', getItemsUnderSubCategory, (req: Request, res: Response) => {
        logger.info('GET /api/v1/sub_categories/:sub_category_id/items');
        res.status(StatusCodes.OK).send({
            message: "GET /api/v1/sub_categories/:sub_category_id/items"
        });
    });

    /**
     * @openapi
     * '/api/v1/categories/{category_id}/sub-categories/{id}':
     *   patch:
     *     tags:
     *       - Sub-Category
     *     summary: Update a sub-category by ID
     *     description: Update a sub-category with the given details by ID
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to which the sub-category belongs
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 required: true
     *                 description: The name of the sub-category
     *                 example: "Electronics"
     *               image:
     *                 type: string
     *                 format: url
     *                 required: true
     *                 description: The image URL of the sub-category
     *                 example: "https://example.com/image.jpg"
     *               category_id:
     *                 type: string
     *                 required: true
     *                 description: The ID of the sub-category to which the sub-category belongs
     *                 example: "12345"
     *               description:
     *                 type: string
     *                 required: true
     *                 description: The description of the sub-category
     *                 example: "Category for all electronic items"
     *               tax_applicable:
     *                 type: boolean
     *                 required: true
     *                 description: Whether the sub-category is subject to tax
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage applicable to the sub-category
     *                 example: 18
     *     responses:
     *       200:
     *         description: Sub-Category updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: The success message
     *                   example: "Sub-Category updated successfully"
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
     *                     category_id:
     *                       type: string
     *                       description: The ID of the category to which the sub-category belongs
     *                       example: "12345"
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
     *                   example: "Invalid data provided"
     *       404:
     *         description: Not found, sub-category ID does not exist
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Sub-Category not found"
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
    router.patch('/api/v1/categories/:category_id/:id', validateData(updateItemSchema), updateItemUnderCategory, (req: Request, res: Response) => {
        logger.info('PATCH /api/v1/categories/:category_id/:id');
        res.status(StatusCodes.OK).send({
            message: "PATCH /api/v1/categories/:category_id/:id"
        });
    });

    /**
     * @openapi
     * '/api/v1/categories/{category_id}/sub-categories/{id}':
     *   patch:
     *     tags:
     *       - Sub-Category
     *     summary: Update a sub-category by ID
     *     description: Update a sub-category with the given details by ID
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to which the sub-category belongs
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 required: true
     *                 description: The name of the sub-category
     *                 example: "Electronics"
     *               image:
     *                 type: string
     *                 format: url
     *                 required: true
     *                 description: The image URL of the sub-category
     *                 example: "https://example.com/image.jpg"
     *               category_id:
     *                 type: string
     *                 required: true
     *                 description: The ID of the sub-category to which the sub-category belongs
     *                 example: "12345"
     *               description:
     *                 type: string
     *                 required: true
     *                 description: The description of the sub-category
     *                 example: "Category for all electronic items"
     *               tax_applicable:
     *                 type: boolean
     *                 required: true
     *                 description: Whether the sub-category is subject to tax
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage applicable to the sub-category
     *                 example: 18
     *     responses:
     *       200:
     *         description: Sub-Category updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: The success message
     *                   example: "Sub-Category updated successfully"
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
     *                     category_id:
     *                       type: string
     *                       description: The ID of the category to which the sub-category belongs
     *                       example: "12345"
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
     *                   example: "Invalid data provided"
     *       404:
     *         description: Not found, sub-category ID does not exist
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Sub-Category not found"
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
    router.patch('/api/v1/sub_categories/:sub_category_id/:id', validateData(updateItemSchema), updateItemUnderCategory, (req: Request, res: Response) => {
        logger.info('PATCH /api/v1/sub_categories/:sub_category_id/:id');
        res.status(StatusCodes.OK).send({
            message: "PATCH /api/v1/sub_categories/:sub_category_id/:id"
        });
    });
}
