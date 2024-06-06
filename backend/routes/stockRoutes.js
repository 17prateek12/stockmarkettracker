import express from 'express';
import { historicaldata,searchSymbol } from '../controllers/stockController.js';

const router = express.Router();

router.route("/hisdata/:symbol").get(historicaldata);
router.route("/search/:query").get(searchSymbol);

export default router;