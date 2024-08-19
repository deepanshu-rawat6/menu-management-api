import express from 'express';

import api from './api';
import category from './category';
import subCategory from './subCategory';
import items from './items';

const router = express.Router();

export default (): express.Router => {
    api(router)
    category(router)
    subCategory(router)
    items(router)

    return router;
}