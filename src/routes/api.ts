import express, { Request, Response } from 'express';
import logger from '../utils/logger';

export default (router: express.Router) => {

    /**
     * @openapi
     * '/api/v1/healthcheck':
     *   get:
     *     tags:
     *       - API
     *     description: Responds if the app is up and running
     *     responses:
     *       200:
     *         description: App is up and running
     */
    router.get('/api/v1/healthcheck', (req: Request, res: Response) => {
        logger.info('GET /api/v1/healthcheck');
        res.status(200).send({
            message: "Healthcheck OK!"
        });
    });

    /**
     * @openapi
     * '/api/v1/hello':
     *   get:
     *     tags:
     *       - API
     *     description: Responds with a hello world message
     *     responses:
     *       200:
     *         description: Hello World!
     */
    router.get('/api/v1/hello', (req: Request, res: Response) => {
        logger.info('GET /api/v1/hello');
        res.status(200).send({
            message: "Hello World!"
        });
    });
}