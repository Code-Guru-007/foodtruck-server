import express from "express";
import dishesRouter from './appRoutes/dishes_route.js';
import ingredientiesRouter from './appRoutes/ingredienties_route.js';
import inventoryRouter from './appRoutes/inventory_route.js';
import measurementRouter from './appRoutes/measurement_route.js';
import salesOrdersRouter from './appRoutes/salesOrders_route.js';
import storagesRouter from './appRoutes/storages_route.js';
import typesRouter from './appRoutes/types_route.js';

const router = express.Router();

router.use('/dish', dishesRouter)
router.use('/ingredient', ingredientiesRouter)
router.use('/inventory', inventoryRouter)
router.use('/salesorder', salesOrdersRouter)
router.use('/measurement', measurementRouter)
router.use('/storage', storagesRouter)
router.use('/type', typesRouter)

export default router;