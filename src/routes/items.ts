import express, { Request, Response } from 'express';
import logger from '../utils/logger';
import { StatusCodes } from 'http-status-codes';
import { validateData } from '../middlewares';
import { createItemSchema, updateItemSchema } from '../schemas';
import { createItemUnderCategory, createItemUnderSubCategory, updateItemUnderCategory, updateItemUnderSubCategory, getAllItems, getItemByIdORName, getItemsUnderCategory, getItemsUnderSubCategory } from 'controllers';


export default (router: express.Router) => {
    /**
     * @openapi
     * '/api/v1/categories/{category_id}/items':
     *   post:
     *     tags:
     *       - Item
     *     summary: Create a new item under a specific category
     *     description: Create a new item with the given details under a specific category
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the category to which the item belongs
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: The name of the item
     *                 example: "Smartphone"
     *               image:
     *                 type: string
     *                 format: url
     *                 description: The image URL of the item
     *                 example: "https://example.com/smartphone.jpg"
     *               description:
     *                 type: string
     *                 description: The description of the item
     *                 example: "Latest model smartphone with advanced features"
     *               tax_applicable:
     *                 type: boolean
     *                 description: Whether the item is subject to tax
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage of the item, applicable if tax is applicable
     *                 example: 18
     *               base_amount:
     *                 type: number
     *                 description: The base amount of the item before any discounts
     *                 example: 50000
     *               discount:
     *                 type: number
     *                 description: The discount amount applicable to the item
     *                 example: 5000
     *               total_amount:
     *                 type: number
     *                 description: The total amount after discount is applied (Base - Discount)
     *                 example: 45000
     *     responses:
     *       200:
     *         description: Item created successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: The success message
     *                   example: "Item created successfully"
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       description: The unique identifier of the item
     *                       example: "12345"
     *                     category_id:
     *                       type: string
     *                       description: The ID of the category to which the item belongs
     *                       example: "67890"
     *                     name:
     *                       type: string
     *                       description: The name of the item
     *                       example: "Smartphone"
     *                     image:
     *                       type: string
     *                       format: url
     *                       description: The image URL of the item
     *                       example: "https://example.com/smartphone.jpg"
     *                     description:
     *                       type: string
     *                       description: The description of the item
     *                       example: "Latest model smartphone with advanced features"
     *                     tax_applicable:
     *                       type: boolean
     *                       description: Whether the item is subject to tax
     *                       example: true
     *                     tax:
     *                       type: number
     *                       description: The tax percentage applicable to the item
     *                       example: 18
     *                     base_amount:
     *                       type: number
     *                       description: The base amount of the item
     *                       example: 50000
     *                     discount:
     *                       type: number
     *                       description: The discount amount applicable to the item
     *                       example: 5000
     *                     total_amount:
     *                       type: number
     *                       description: The total amount after discount is applied
     *                       example: 45000
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
     *         description: Conflict, failed to create item, item already exists
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Item already exists"
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
     * '/api/v1/sub-categories/{sub_category_id}/items':
     *   post:
     *     tags:
     *       - Item
     *     summary: Create a new item under a specific sub-category
     *     description: Create an item with the given details under a specific sub-category
     *     parameters:
     *       - in: path
     *         name: sub_category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to which the item belongs
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: The name of the item
     *                 example: "Smartphone"
     *               image:
     *                 type: string
     *                 format: url
     *                 description: The image URL of the item
     *                 example: "https://example.com/smartphone.jpg"
     *               description:
     *                 type: string
     *                 description: The description of the item
     *                 example: "Latest model smartphone with advanced features"
     *               tax_applicable:
     *                 type: boolean
     *                 description: Whether the item is subject to tax
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage of the item, applicable if tax is applicable
     *                 example: 18
     *               base_amount:
     *                 type: number
     *                 description: The base amount of the item before any discounts
     *                 example: 50000
     *               discount:
     *                 type: number
     *                 description: The discount amount applicable to the item
     *                 example: 5000
     *               total_amount:
     *                 type: number
     *                 description: The total amount after discount is applied (Base - Discount)
     *                 example: 45000
     *     responses:
     *       200:
     *         description: Item created successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: The success message
     *                   example: "Item created successfully"
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       description: The unique identifier of the item
     *                       example: "12345"
     *                     sub_category_id:
     *                       type: string
     *                       description: The ID of the sub-category to which the item belongs
     *                       example: "67890"
     *                     name:
     *                       type: string
     *                       description: The name of the item
     *                       example: "Smartphone"
     *                     image:
     *                       type: string
     *                       format: url
     *                       description: The image URL of the item
     *                       example: "https://example.com/smartphone.jpg"
     *                     description:
     *                       type: string
     *                       description: The description of the item
     *                       example: "Latest model smartphone with advanced features"
     *                     tax_applicable:
     *                       type: boolean
     *                       description: Whether the item is subject to tax
     *                       example: true
     *                     tax:
     *                       type: number
     *                       description: The tax percentage applicable to the item
     *                       example: 18
     *                     base_amount:
     *                       type: number
     *                       description: The base amount of the item
     *                       example: 50000
     *                     discount:
     *                       type: number
     *                       description: The discount amount applicable to the item
     *                       example: 5000
     *                     total_amount:
     *                       type: number
     *                       description: The total amount after discount is applied
     *                       example: 45000
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
     *         description: Conflict, failed to create item, item already exists
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Item already exists"
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
     * '/api/v1/items':
     *   get:
     *     tags:
     *       - Item
     *     summary: Retrieve an item by ID or name
     *     description: This endpoint allows you to fetch a single item by either its ID or name.
     *     parameters:
     *       - in: query
     *         name: id
     *         required: false
     *         schema:
     *           type: string
     *         description: The ID of the item to retrieve
     *         example: "12345"
     *       - in: query
     *         name: name
     *         required: false
     *         schema:
     *           type: string
     *         description: The name of the item to retrieve
     *         example: "Smartphone"
     *     responses:
     *       200:
     *         description: Item data fetched successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: string
     *                   description: The unique identifier of the item
     *                   example: "12345"
     *                 name:
     *                   type: string
     *                   description: The name of the item
     *                   example: "Smartphone"
     *                 image:
     *                   type: string
     *                   format: url
     *                   description: The image URL of the item
     *                   example: "https://example.com/smartphone.jpg"
     *                 sub_category_id:
     *                   type: string
     *                   description: The ID of the sub-category to which the item belongs
     *                   example: "67890"
     *                 description:
     *                   type: string
     *                   description: The description of the item
     *                   example: "Latest model smartphone with advanced features"
     *                 tax_applicable:
     *                   type: boolean
     *                   description: Whether the item is subject to tax
     *                   example: true
     *                 tax:
     *                   type: number
     *                   description: The tax percentage applicable to the item
     *                   example: 18
     *                 base_amount:
     *                   type: number
     *                   description: The base amount of the item before any discounts
     *                   example: 50000
     *                 discount:
     *                   type: number
     *                   description: The discount amount applicable to the item
     *                   example: 5000
     *                 total_amount:
     *                   type: number
     *                   description: The total amount after discount is applied (Base - Discount)
     *                   example: 45000
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
     *         description: Item not found
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Item not found"
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
     * '/api/v1/items/all':
     *   get:
     *     tags:
     *       - Item
     *     summary: Retrieve all items
     *     description: This endpoint fetches all items available in the system.
     *     responses:
     *       200:
     *         description: Fetched all items successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: string
     *                     description: The unique identifier of the item
     *                     example: "12345"
     *                   name:
     *                     type: string
     *                     description: The name of the item
     *                     example: "Smartphone"
     *                   image:
     *                     type: string
     *                     format: url
     *                     description: The image URL of the item
     *                     example: "https://example.com/smartphone.jpg"
     *                   sub_category_id:
     *                     type: string
     *                     description: The ID of the sub-category to which the item belongs
     *                     example: "67890"
     *                   description:
     *                     type: string
     *                     description: The description of the item
     *                     example: "Latest model smartphone with advanced features"
     *                   tax_applicable:
     *                     type: boolean
     *                     description: Whether the item is subject to tax
     *                     example: true
     *                   tax:
     *                     type: number
     *                     description: The tax percentage applicable to the item
     *                     example: 18
     *                   base_amount:
     *                     type: number
     *                     description: The base amount of the item before any discounts
     *                     example: 50000
     *                   discount:
     *                     type: number
     *                     description: The discount amount applicable to the item
     *                     example: 5000
     *                   total_amount:
     *                     type: number
     *                     description: The total amount after discount is applied (Base - Discount)
     *                     example: 45000
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
     * '/api/v1/categories/{category_id}/items':
     *   get:
     *     tags:
     *       - Item
     *     summary: Retrieve all items by category
     *     description: This endpoint fetches all items belonging to a specific category.
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the category to which the items belong
     *         example: "12345"
     *     responses:
     *       200:
     *         description: Fetched all items successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: string
     *                     description: The unique identifier of the item
     *                     example: "67890"
     *                   name:
     *                     type: string
     *                     description: The name of the item
     *                     example: "Smartphone"
     *                   image:
     *                     type: string
     *                     format: url
     *                     description: The image URL of the item
     *                     example: "https://example.com/smartphone.jpg"
     *                   category_id:
     *                     type: string
     *                     description: The ID of the category to which the item belongs
     *                     example: "12345"
     *                   description:
     *                     type: string
     *                     description: The description of the item
     *                     example: "Latest model smartphone with advanced features"
     *                   tax_applicable:
     *                     type: boolean
     *                     description: Whether the item is subject to tax
     *                     example: true
     *                   tax:
     *                     type: number
     *                     description: The tax percentage applicable to the item
     *                     example: 18
     *                   base_amount:
     *                     type: number
     *                     description: The base price of the item before any discounts
     *                     example: 500.00
     *                   discount:
     *                     type: number
     *                     description: The discount amount applied to the item
     *                     example: 50.00
     *                   total_amount:
     *                     type: number
     *                     description: The final price of the item after applying the discount
     *                     example: 450.00
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
     * '/api/v1/sub-categories/{sub_category_id}/items':
     *   get:
     *     tags:
     *       - Item
     *     summary: Retrieve all items by sub-category
     *     description: This endpoint fetches all items belonging to a specific sub-category.
     *     parameters:
     *       - in: path
     *         name: sub_category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to which the items belong
     *         example: "67890"
     *     responses:
     *       200:
     *         description: Fetched all items successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: string
     *                     description: The unique identifier of the item
     *                     example: "54321"
     *                   name:
     *                     type: string
     *                     description: The name of the item
     *                     example: "Smartphone"
     *                   image:
     *                     type: string
     *                     format: url
     *                     description: The image URL of the item
     *                     example: "https://example.com/smartphone.jpg"
     *                   sub_category_id:
     *                     type: string
     *                     description: The ID of the sub-category to which the item belongs
     *                     example: "67890"
     *                   description:
     *                     type: string
     *                     description: The description of the item
     *                     example: "Latest model smartphone with advanced features"
     *                   tax_applicable:
     *                     type: boolean
     *                     description: Whether the item is subject to tax
     *                     example: true
     *                   tax:
     *                     type: number
     *                     description: The tax percentage applicable to the item
     *                     example: 18
     *                   base_amount:
     *                     type: number
     *                     description: The base price of the item before any discounts
     *                     example: 500.00
     *                   discount:
     *                     type: number
     *                     description: The discount amount applied to the item
     *                     example: 50.00
     *                   total_amount:
     *                     type: number
     *                     description: The final price of the item after applying the discount
     *                     example: 450.00
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
     * '/api/v1/categories/{category_id}/items/{id}':
     *   patch:
     *     tags:
     *       - Item
     *     summary: Update an item by ID under a specific category
     *     description: Update an item with the given details by ID within a specific category.
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the category to which the item belongs
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the item to update
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
     *                 description: The name of the item
     *                 example: "Smartphone"
     *               image:
     *                 type: string
     *                 format: url
     *                 required: true
     *                 description: The image URL of the item
     *                 example: "https://example.com/smartphone.jpg"
     *               category_id:
     *                 type: string
     *                 required: true
     *                 description: The ID of the category to which the item belongs
     *                 example: "12345"
     *               description:
     *                 type: string
     *                 required: true
     *                 description: The description of the item
     *                 example: "Latest model smartphone with advanced features"
     *               tax_applicable:
     *                 type: boolean
     *                 required: true
     *                 description: Whether the item is subject to tax
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage applicable to the item
     *                 example: 18
     *               base_amount:
     *                 type: number
     *                 description: The base price of the item before any discounts
     *                 example: 500.00
     *               discount:
     *                 type: number
     *                 description: The discount amount applied to the item
     *                 example: 50.00
     *               total_amount:
     *                 type: number
     *                 description: The final price of the item after applying the discount
     *                 example: 450.00
     *     responses:
     *       200:
     *         description: Item updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: The success message
     *                   example: "Item updated successfully"
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       description: The unique identifier of the item
     *                       example: "54321"
     *                     name:
     *                       type: string
     *                       description: The name of the item
     *                       example: "Smartphone"
     *                     image:
     *                       type: string
     *                       format: url
     *                       description: The image URL of the item
     *                       example: "https://example.com/smartphone.jpg"
     *                     category_id:
     *                       type: string
     *                       description: The ID of the category to which the item belongs
     *                       example: "12345"
     *                     description:
     *                       type: string
     *                       description: The description of the item
     *                       example: "Latest model smartphone with advanced features"
     *                     tax_applicable:
     *                       type: boolean
     *                       description: Whether the item is subject to tax
     *                       example: true
     *                     tax:
     *                       type: number
     *                       description: The tax percentage applicable to the item
     *                       example: 18
     *                     base_amount:
     *                       type: number
     *                       description: The base price of the item before any discounts
     *                       example: 500.00
     *                     discount:
     *                       type: number
     *                       description: The discount amount applied to the item
     *                       example: 50.00
     *                     total_amount:
     *                       type: number
     *                       description: The final price of the item after applying the discount
     *                       example: 450.00
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
     *         description: Not found, item ID does not exist
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Item not found"
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
    router.patch('/api/v1/categories/:category_id/items/:id', validateData(updateItemSchema), updateItemUnderCategory, (req: Request, res: Response) => {
        logger.info('PATCH /api/v1/categories/:category_id/items/:id');
        res.status(StatusCodes.OK).send({
            message: "PATCH /api/v1/categories/:category_id/items/:id"
        });
    });

    /**
     * @openapi
     * '/api/v1/sub-categories/{sub_category_id}/items/{id}':
     *   patch:
     *     tags:
     *       - Item
     *     summary: Update an item by ID under a specific sub-category
     *     description: Update an item with the given details by ID within a specific sub-category.
     *     parameters:
     *       - in: path
     *         name: category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the category to which the sub-category belongs
     *       - in: path
     *         name: sub_category_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the sub-category to which the item belongs
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the item to update
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
     *                 description: The name of the item
     *                 example: "Smartphone"
     *               image:
     *                 type: string
     *                 format: url
     *                 required: true
     *                 description: The image URL of the item
     *                 example: "https://example.com/smartphone.jpg"
     *               category_id:
     *                 type: string
     *                 required: true
     *                 description: The ID of the category to which the item belongs
     *                 example: "12345"
     *               sub_category_id:
     *                 type: string
     *                 required: true
     *                 description: The ID of the sub-category to which the item belongs
     *                 example: "54321"
     *               description:
     *                 type: string
     *                 required: true
     *                 description: The description of the item
     *                 example: "Latest model smartphone with advanced features"
     *               tax_applicable:
     *                 type: boolean
     *                 required: true
     *                 description: Whether the item is subject to tax
     *                 example: true
     *               tax:
     *                 type: number
     *                 description: The tax percentage applicable to the item
     *                 example: 18
     *               base_amount:
     *                 type: number
     *                 description: The base price of the item before any discounts
     *                 example: 500.00
     *               discount:
     *                 type: number
     *                 description: The discount amount applied to the item
     *                 example: 50.00
     *               total_amount:
     *                 type: number
     *                 description: The final price of the item after applying the discount
     *                 example: 450.00
     *     responses:
     *       200:
     *         description: Item updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: The success message
     *                   example: "Item updated successfully"
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       description: The unique identifier of the item
     *                       example: "12345"
     *                     name:
     *                       type: string
     *                       description: The name of the item
     *                       example: "Smartphone"
     *                     image:
     *                       type: string
     *                       format: url
     *                       description: The image URL of the item
     *                       example: "https://example.com/smartphone.jpg"
     *                     category_id:
     *                       type: string
     *                       description: The ID of the category to which the item belongs
     *                       example: "12345"
     *                     sub_category_id:
     *                       type: string
     *                       description: The ID of the sub-category to which the item belongs
     *                       example: "54321"
     *                     description:
     *                       type: string
     *                       description: The description of the item
     *                       example: "Latest model smartphone with advanced features"
     *                     tact_applicable:
     *                       type: boolean
     *                       description: Whether the item is subject to tax
     *                       example: true
     *                     tax:
     *                       type: number
     *                       description: The tax percentage applicable to the item
     *                       example: 18
     *                     base_amount:
     *                       type: number
     *                       description: The base price of the item before any discounts
     *                       example: 500.00
     *                     discount:
     *                       type: number
     *                       description: The discount amount applied to the item
     *                       example: 50.00
     *                     total_amount:
     *                       type: number
     *                       description: The final price of the item after applying the discount
     *                       example: 450.00
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
     *         description: Not found, item ID does not exist
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: The error message
     *                   example: "Item not found"
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
    router.patch('/api/v1/sub_categories/:sub_category_id/items/:id', validateData(updateItemSchema), updateItemUnderSubCategory, (req: Request, res: Response) => {
        logger.info('PATCH /api/v1/sub_categories/:sub_category_id/items/:id');
        res.status(StatusCodes.OK).send({
            message: "PATCH /api/v1/sub_categories/:sub_category_id/items/:id"
        });
    });
}
