import express from 'express';
import { registeruser, loginuser,currentuser,logoutuser} from '../controllers/UserController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.route('/register').post(registeruser);

router.route('/login').post(loginuser);

router.route('/current').get(validateToken ,currentuser);

router.route('/logout').post(validateToken,logoutuser);

export default router;
