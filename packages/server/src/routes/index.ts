import { Router } from 'express';
import { restaurantRoute } from './restaurant/index.js';

const routes = Router();

/**
 * @openapi
 * /restaurant:
 *   get:
 *     tags:
 *       - 맛집
 *     responses:
 *       200:
 *         description: 맛집 정보 반환
 *   post:
 *     tags:
 *       - 맛집
 *     description: 맛집 정보 등록
 *     responses:
 *       201:
 *         description: 맛집 정보 등록 성공
 */
routes.use('/restaurant', restaurantRoute);

export { routes };
