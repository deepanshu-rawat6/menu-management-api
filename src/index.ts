import App from './server';
import http from 'http';
import config from './config';
import { logger, swaggerDocs } from './utils';

const server = http.createServer(App);

server.listen(config.PORT, () => {

    logger.info(`Server is running on port: ${config.PORT}`);

    swaggerDocs(App, config.PORT.toString());
});
