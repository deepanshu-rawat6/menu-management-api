import App from './server';
import http from 'http';
import config from './config';
import logger from './utils/logger';
import swaggerDocs from './utils/swagger-docs';
import { connect } from './utils/db';

const server = http.createServer(App);

server.listen(config.PORT, () => {

    connect();

    logger.info(`Server is running on port: ${config.PORT}`);

    swaggerDocs(App, config.PORT.toString());
});
