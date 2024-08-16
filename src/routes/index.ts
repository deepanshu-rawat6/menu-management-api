import express from 'express';

import api from './api';
import category from './category';

const router = express.Router();

export default (): express.Router => {
    api(router)
    category(router)

    return router;
}