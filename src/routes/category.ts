import express, { Request, Response } from 'express';
import logger from '../utils/logger';
import { StatusCodes } from 'http-status-codes';
import { validateData } from '../middlewares';
import { createCategorySchema, updateCategorySchema } from '../schemas';
import { } from '../controllers';

export default (router: express.Router) => {
    /**
     * @openapi
     * '/api/v1/category':
     *   post:
     *     tags:
     *       - Category
     *     description: Create the category with the given details
     *     responses:
     *       200:
     *         description: Created the category successfully
     *       500:
     *         description: Internal server error
     */
    router.post('/api/v1/category', validateData(createCategorySchema), (req: Request, res: Response) => {
        logger.info('POST /api/v1/category');
        res.status(StatusCodes.OK).send({
            message: "POST /api/v1/category"
        });
    });


    /**
     * @openapi
     * '/api/v1/products/:id':
     *   get:
     *     tags:
     *       - Products
     *     description: To get a single product by id
     *     responses:
     *       200:
     *         description: Product data fetched successfully
     *       401:
     *         description: Invalid credentials
     *       500:
     *         description: Internal server error
     */
    router.get('/api/v1/products/:id', (req: Request, res: Response) => {
        logger.info('GET /api/v1/products/:id');
        res.status(StatusCodes.OK).send({
            message: "GET /api/v1/products/:id"
        });
    });

    /**
     * @openapi
     * '/api/v1/products/':
     *   get:
     *     tags:
     *       - Products
     *     description: To get multiple products
     *     responses:
     *       200:
     *         description: Products data fetched successfully
     *       401:
     *         description: Invalid credentials
     *       500:
     *         description: Internal server error
     */
    router.get('/api/v1/products/', (req: Request, res: Response) => {
        logger.info('GET /api/v1/products/');
        res.status(StatusCodes.OK).send({
            message: "GET /api/v1/products/"
        });
    });

    /**
     * @openapi
     * '/api/auth/products/:id':
     *   patch:
     *     tags:
     *       - Products
     *     description: Update products with the given details
     *     responses:
     *       200:
     *         description: Product update successful
     *       401:
     *         description: Invalid credentials
     *       500:
     *         description: Internal server error
     */
    router.patch('/api/v1/products/:id', validateData(updateCategorySchema), (req: Request, res: Response) => {
        logger.info('PATCH /api/v1/products/:id');
        res.status(StatusCodes.OK).send({
            message: "PATCH /api/v1/products/:id"
        });
    });

    /**
     * @openapi
     * '/api/v1/products/:id':
     *   delete:
     *     tags:
     *       - Products
     *     description: Delete the product with the given id
     *     responses:
     *       200:
     *         description: Product delete successfully
     *       401:
     *         description: Invalid credentials
     *       500:
     *         description: Internal server error
     */
    router.delete('/api/v1/products/:id', (req: Request, res: Response) => {
        logger.info('DELETE /api/v1/products/:id');
        res.status(StatusCodes.OK).send({
            message: "DELETE /api/v1/products/:id"
        });
    });
}