import express from 'express';
import { historicaldata,searchSymbol,companydetail, newsdetail } from '../controllers/stockController.js';

const router = express.Router();

router.route("/hisdata/:symbol/:startdate/:enddate").get(historicaldata);
router.route("/search/:query").get(searchSymbol);
router.route("/detail/:symbol").get(companydetail)
router.route("/news").get(newsdetail);

export default router;